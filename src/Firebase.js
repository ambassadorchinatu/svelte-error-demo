// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_APP_DOMAIN,
  projectId: YOUR_PROJECT_ID,
  storageBucket: YOUR_STORAGE_BUCKET,
  messagingSenderId: OUR_SENDER_ID,
  appId: YOUR_APP_ID,
  measurementId: YOUR_MEASUREMENT_ID
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const db = getFirestore(app); // Initialize Firestore

export default app;
export { analytics, auth, storage, db };