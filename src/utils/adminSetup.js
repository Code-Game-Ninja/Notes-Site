import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

/**
 * Ensure admin user has the correct role in Firestore
 * Call this function after admin user signs up/logs in
 */
export const ensureAdminRole = async (user) => {
  if (!user) return;
  
  const adminEmails = [
    'chiragmishra573@gmail.com'
    // Add more admin emails here if needed
  ];
  
  if (adminEmails.includes(user.email.toLowerCase())) {
    const userDocRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists() || userDoc.data().role !== 'admin') {
      console.log('Setting up admin role for:', user.email);
      
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || user.email.split('@')[0],
        role: 'admin',
        createdAt: userDoc.exists() ? userDoc.data().createdAt : new Date(),
        lastLogin: new Date(),
        isAdmin: true
      }, { merge: true });
      
      console.log('Admin role set successfully!');
    }
  }
};

/**
 * Check if a user is admin based on their email
 */
export const isAdminEmail = (email) => {
  const adminEmails = [
    'chiragmishra573@gmail.com'
  ];
  return adminEmails.includes(email?.toLowerCase());
};