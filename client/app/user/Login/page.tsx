"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { signInWithGoogle, loginWithEmail } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      router.push("/biases");
    } catch (err) {
      setError("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error
    setLoading(true);
    try {
      await loginWithEmail(email, password);
      router.push("/biases");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image & Branding */}
      <div className="w-1/2 relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
          alt="Watch Vault"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-8 text-white text-2xl font-bold">
          Cognitive<span className="text-green-500">Biases</span>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-2">Account Login</h2>
          <p className="text-gray-500 mb-6">
            If you are already a member, login with your email and password.
          </p>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleEmailSignIn}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
                required
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
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login Account"}
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="mx-4 text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100"
            disabled={loading}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2"
            />
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>

          {/* Signup Link */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            Don't have an account?{" "}
            <a href="/user/signup" className="text-green-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
