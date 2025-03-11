"use client";

import { auth } from "@/lib/firebase";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
<<<<<<< HEAD
import { 
  User, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut 
=======
import {
  User,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
>>>>>>> 7a3e7c4 (third commit)
} from "firebase/auth";

const provider = new GoogleAuthProvider();

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
<<<<<<< HEAD
  logout: () => Promise<void>;
  
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
=======
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
>>>>>>> 7a3e7c4 (third commit)
    console.error("useAuth must be used within an AuthProvider");
    return {
      user: null,
      loading: true,
      signInWithGoogle: async () => {},
<<<<<<< HEAD
=======
      signUpWithEmail: async () => {},
      loginWithEmail: async () => {},
>>>>>>> 7a3e7c4 (third commit)
      logout: async () => {},
    };
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Google sign-in error:", error);
<<<<<<< HEAD
=======
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send verification email
      await sendEmailVerification(user);
      alert("Verification email sent. Please check your inbox.");
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
>>>>>>> 7a3e7c4 (third commit)
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
<<<<<<< HEAD
=======
      throw error;
>>>>>>> 7a3e7c4 (third commit)
    }
  };

  return (
<<<<<<< HEAD
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
=======
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signUpWithEmail, loginWithEmail, logout }}>
>>>>>>> 7a3e7c4 (third commit)
      {children}
    </AuthContext.Provider>
  );
};
