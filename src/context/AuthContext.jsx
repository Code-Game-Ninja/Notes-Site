import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { isAdminEmail, ensureAdminRole } from '../utils/adminSetup';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(email, password, displayName) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update user profile
    await updateProfile(user, { displayName });
    
    // Determine user role
    const role = isAdminEmail(email) ? 'admin' : 'user';
    
    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: email,
      displayName: displayName,
      role: role,
      createdAt: new Date(),
      lastLogin: new Date()
    });
    
    setUserRole(role);
    return userCredential;
  }

  async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Get or create user document
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      // Update last login
      const userData = userDoc.data();
      await setDoc(userDocRef, {
        ...userData,
        lastLogin: new Date()
      }, { merge: true });
      setUserRole(userData.role);
    } else {
      // Create user document if it doesn't exist (for existing users)
      const role = isAdminEmail(email) ? 'admin' : 'user';
      
      await setDoc(userDocRef, {
        uid: user.uid,
        email: email,
        displayName: user.displayName || email.split('@')[0],
        role: role,
        createdAt: new Date(),
        lastLogin: new Date()
      });
      setUserRole(role);
    }
    
    return userCredential;
  }

  async function logout() {
    setUserRole(null);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Get user role from Firestore
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role);
          } else {
            // Create user document if it doesn't exist
            const role = isAdminEmail(user.email) ? 'admin' : 'user';
            
            await setDoc(userDocRef, {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || user.email?.split('@')[0],
              role: role,
              createdAt: new Date(),
              lastLogin: new Date()
            });
            setUserRole(role);
          }
          
          // Ensure admin role is properly set
          await ensureAdminRole(user);
        } catch (error) {
          console.error('Error fetching user role:', error);
          setUserRole('user'); // Default to user role
        }
      } else {
        setUserRole(null);
      }
      
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userRole,
    signup,
    login,
    logout,
    isAdmin: userRole === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
