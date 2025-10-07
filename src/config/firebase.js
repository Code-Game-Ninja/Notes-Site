import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Replace with your Firebase project configuration
// Go to Firebase Console > Project Settings > General > Your apps > Web app
const firebaseConfig = {
    apiKey: "AIzaSyDm-quaAZOZcaIq0aoVjGZly8QVtqFVsoo",
  authDomain: "attendance-6f9a2.firebaseapp.com",
  projectId: "attendance-6f9a2",
  storageBucket: "attendance-6f9a2.firebasestorage.app",
  messagingSenderId: "893265890977",
  appId: "1:893265890977:web:48ebfa912ca63f48492ae0",
  measurementId: "G-BV6KCT52W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
