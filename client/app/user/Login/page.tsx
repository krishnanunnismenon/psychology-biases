'use client'
import { useAuth } from "@/context/AuthContext";
export default function LoginPage() {

  const { user, signInWithGoogle, logout } = useAuth();
    return (
      <div className="flex h-screen">
        {/* Left Side - Image & Branding */}
        <div className="w-1/2 relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            alt="Watch Vault"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 left-8 text-white text-2xl font-bold">
            Cognitive<span className="text-green-500">Biasis</span>
          </div>
        </div>
  
        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Account Login</h2>
            <p className="text-gray-500 mb-6">
              If you are already a member, login with your email and password.
            </p>
  
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-green-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
  
            {/* Login Button */}
            
            <button onClick={signInWithGoogle} className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
              Login Account
            </button>
            
  
            {/* Signup Link */}
            <p className="text-sm text-gray-600 mt-4 text-center">
              Don't have an account?{" "}
              <a href="/user/Signup" className="text-green-500 hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  