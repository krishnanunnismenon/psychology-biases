"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const pathname = usePathname();
<<<<<<< HEAD
  
=======
>>>>>>> 7a3e7c4 (third commit)
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-2">
          <Link href="/" className="flex items-center">
<<<<<<< HEAD
            <span className="text-xl font-bold text-primary"> Cognitive Biases</span>
=======
            <span className="text-xl font-bold text-primary">🧠 Cognitive Biases</span>
>>>>>>> 7a3e7c4 (third commit)
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/" 
              className={`${pathname === "/" ? "text-primary font-medium" : "text-gray-600 hover:text-primary"}`}
            >
              Home
            </Link>
<<<<<<< HEAD
            {!user && (
              <Link 
=======
            <Link 
>>>>>>> 7a3e7c4 (third commit)
              href="/journey/blurred" 
              className={`${pathname.startsWith("/journey") ? "text-primary font-medium" : "text-gray-600 hover:text-primary"}`}
            >
              Journey
            </Link>
<<<<<<< HEAD
            )}
            

=======
>>>>>>> 7a3e7c4 (third commit)
            <Link 
              href="/biases" 
              className={`${pathname.startsWith("/biases") ? "text-primary font-medium" : "text-gray-600 hover:text-primary"}`}
            >
              All Biases
            </Link>
            {user && (
              <Link 
                href="/profile" 
                className={`${pathname === "/profile" ? "text-primary font-medium" : "text-gray-600 hover:text-primary"}`}
              >
                Profile
              </Link>
            )}
            {user ? (
              <button 
                onClick={logout} 
                className="text-gray-600 hover:text-primary font-medium"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={signInWithGoogle} 
                className="text-gray-600 hover:text-primary font-medium"
              >
                Sign in with Google
              </button>
            )}
          </div>
        </div>
        
        {user && <ProgressBar />}
      </div>
    </nav>
  );
};

export default Navbar;