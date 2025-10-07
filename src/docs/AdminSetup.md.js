/**
 * Admin Initialization Guide
 * 
 * This guide explains how to set up admin access for your Notes Site.
 * 
 * AUTOMATIC SETUP:
 * The system will automatically detect and set up admin roles for:
 * - chiragmishra573@gmail.com
 * 
 * WHAT HAPPENS WHEN YOU SIGN UP/LOGIN:
 * 1. User document created in Firestore 'users' collection
 * 2. Role automatically set based on email
 * 3. Admin dashboard access granted
 * 
 * USER DOCUMENT STRUCTURE:
 * {
 *   uid: "user-firebase-uid",
 *   email: "user@email.com",
 *   displayName: "User Name",
 *   role: "admin" | "user",
 *   createdAt: Timestamp,
 *   lastLogin: Timestamp,
 *   isAdmin: true (for admin users)
 * }
 * 
 * ADDING MORE ADMINS:
 * 1. Go to /src/utils/adminSetup.js
 * 2. Add email to adminEmails array
 * 3. Redeploy the application
 * 
 * MANUAL ADMIN SETUP (if needed):
 * If you need to manually set someone as admin:
 * 1. Go to Firebase Console
 * 2. Navigate to Firestore Database
 * 3. Find the user document in 'users' collection
 * 4. Change role field from "user" to "admin"
 * 5. Add isAdmin: true field
 * 
 * TESTING ADMIN ACCESS:
 * 1. Sign up/login with chiragmishra573@gmail.com
 * 2. You should see purple "Admin" button in navbar
 * 3. Click to access admin dashboard
 * 4. View and manage pending note submissions
 */

// Example of what happens in the background
const exampleUserDocument = {
  uid: "firebase-generated-uid",
  email: "chiragmishra573@gmail.com",
  displayName: "Chirag Mishra",
  role: "admin",
  createdAt: "2025-10-07T10:00:00Z",
  lastLogin: "2025-10-07T10:00:00Z",
  isAdmin: true
};

export default exampleUserDocument;