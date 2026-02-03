import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  User,
  NextOrObserver,
  Unsubscribe,
} from "firebase/auth";
import { auth } from "./config";

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// T004: AuthState TypeScript interface
export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// T025: Error message mapping (Firebase codes → user-friendly messages)
export function getAuthErrorMessage(errorCode: string): string {
  const errorMessages: Record<string, string> = {
    "auth/user-not-found": "No account found with this email",
    "auth/wrong-password": "Incorrect password",
    "auth/invalid-email": "Please enter a valid email address",
    "auth/invalid-credential": "Invalid email or password",
    "auth/too-many-requests": "Too many attempts. Please try again later",
    "auth/network-request-failed": "Network error. Check your connection and try again",
    "auth/user-disabled": "This account has been disabled",
    "auth/operation-not-allowed": "Sign-in is not enabled for this application",
    "not-configured": "Authentication is not configured. Please contact support.",
  };

  return errorMessages[errorCode] || "An error occurred. Please try again";
}

// T005: Auth helper functions
export async function signIn(
  email: string,
  password: string
): Promise<{ user: User | null; error: string | null }> {
  if (!auth) {
    return { user: null, error: getAuthErrorMessage("not-configured") };
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error: unknown) {
    const firebaseError = error as { code?: string };
    const errorMessage = getAuthErrorMessage(firebaseError.code || "unknown");
    return { user: null, error: errorMessage };
  }
}

export async function signInWithGoogle(): Promise<{ user: User | null; error: string | null }> {
  if (!auth) {
    return { user: null, error: getAuthErrorMessage("not-configured") };
  }

  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    return { user: userCredential.user, error: null };
  } catch (error: unknown) {
    const firebaseError = error as { code?: string };
    // Handle popup closed by user
    if (firebaseError.code === "auth/popup-closed-by-user") {
      return { user: null, error: null }; // Not an error, user just cancelled
    }
    const errorMessage = getAuthErrorMessage(firebaseError.code || "unknown");
    return { user: null, error: errorMessage };
  }
}

export async function signOut(): Promise<{ error: string | null }> {
  if (!auth) {
    return { error: getAuthErrorMessage("not-configured") };
  }

  try {
    await firebaseSignOut(auth);
    return { error: null };
  } catch (error: unknown) {
    const firebaseError = error as { code?: string };
    const errorMessage = getAuthErrorMessage(firebaseError.code || "unknown");
    return { error: errorMessage };
  }
}

export function onAuthStateChanged(
  callback: NextOrObserver<User | null>
): Unsubscribe {
  if (!auth) {
    // Return a no-op unsubscribe function if auth is not configured
    // and immediately call callback with null to indicate no user
    if (typeof callback === "function") {
      callback(null);
    }
    return () => {};
  }

  return firebaseOnAuthStateChanged(auth, callback);
}
