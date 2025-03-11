"use client";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
  const auth = getAuth();
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  // Get email from localStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("emailForVerification");
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (!email) return;

    const checkVerification = async () => {
      const user = auth.currentUser;
      if (user) {
        await user.reload(); // Reload user data from Firebase
        console.log("Email Verified:", user.emailVerified); // Debugging
        if (user.emailVerified) {
          setIsVerified(true);
          alert("Your email is verified! Redirecting...");
          clearInterval(interval); // Stop checking once verified
          router.push("/biases"); // Redirect after success
        }
      }
    };

    // Check verification every 3 seconds
    const interval = setInterval(checkVerification, 3000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, [email]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
      {isVerified ? (
        <p className="text-green-600">✅ Email Verified! Redirecting...</p>
      ) : (
        <p className="text-gray-600">
          Please check your email and click the verification link.
        </p>
      )}
    </div>
  );
}
