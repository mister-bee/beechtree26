import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, browserLocalPersistence, setPersistence, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if Firebase config is available
const isConfigured = firebaseConfig.apiKey && firebaseConfig.apiKey !== "undefined";

// Initialize Firebase (singleton pattern for Next.js)
// Only initialize on client side or when config is available
let app: FirebaseApp | null = null;
let auth: Auth | null = null;

if (typeof window !== "undefined" && isConfigured) {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);

  // T016: Set persistence to LOCAL for session persistence across browser restarts
  setPersistence(auth, browserLocalPersistence);
}

export { app, auth };
