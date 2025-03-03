"use client";

import { useState } from "react";
import Link from "next/link";

export default function BiasPage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Hindsight Bias</h1>

        <p className="text-lg mb-6 text-center">
          Most users will convince themselves they "knew" it all along.
        </p>

        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
            <p className="text-gray-700">
              <strong>Is Your brain loves rewriting history!</strong> Ever thought, "I knew that would happen" after an event? That's your mind tricking you into believing you predicted the past.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
              alt="Person with shadow"
              className="w-48 h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Button to trigger popup */}
        <div className="flex justify-center">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            onClick={() => setShowPopup(true)}
          >
            NEXT LESSON
          </button>
        </div>
      </div>

      {/* Login Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            <h2 className="text-xl font-semibold mb-4">Please Login to Continue</h2>
            <p className="text-gray-600 mb-4">You need to log in before accessing the next lesson.</p>
            
            <div className="flex justify-center space-x-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>

              <Link href="/user/Login">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  Proceed to Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
