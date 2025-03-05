"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const AuthButtons = () => {
  const { user,  logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      
      setShowAuthModal(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  return (
    <div>
      {user ? (
        <button 
          onClick={() => logout()} 
          className="text-gray-600 hover:text-primary"
        >
          Logout
        </button>
      ) : (
        <button 
          onClick={() => setShowAuthModal(true)} 
          className="text-gray-600 hover:text-primary"
        >
          Login
        </button>
      )}

      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            <form onSubmit={handleAuth}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
                
                <button
                  type="button"
                  onClick={() => setShowAuthModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
            
            <div className="text-center">
              <button
                onClick={toggleAuthMode}
                className="text-primary hover:underline"
              >
                {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;