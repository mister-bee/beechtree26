"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged, AuthState } from "@/lib/firebase/auth";

// T006: AuthProvider React context component
const AuthContext = createContext<AuthState | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // T017: Add loading state handling while checking existing session
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false);
      setError(null);
    });

    return () => unsubscribe();
  }, []);

  // T024: State updates automatically via onAuthStateChanged when signOut completes
  const value: AuthState = {
    user,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// T007: useAuth custom hook that consumes AuthProvider context
export function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
