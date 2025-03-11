"use client";

import { useAuth } from "@/context/AuthContext";
import { useProgress } from "@/context/ProgressContext";
import { lessons } from "@/data/lessons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const { progress, completedLessons, loading: progressLoading } = useProgress();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if not logged in
    if (!authLoading && !user) {
      router.push("/");
    }
  }, [user, authLoading, router]);

  if (authLoading || progressLoading) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Your Learning Profile</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Progress Overview</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div 
              className="progress-bar h-4 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-right text-sm text-gray-600">{progress}% Complete</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Learning Journey</h2>
          
          <div className="space-y-4">
            {lessons.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              
              return (
                <div 
                  key={lesson.id}
                  className={`p-4 rounded-lg border ${isCompleted ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      {isCompleted && (
                        <span className="text-green-600 text-sm">✓ Completed</span>
                      )}
                    </div>
                    
                    <Link href={lesson.path}>
                      <button className={isCompleted ? "btn-secondary text-sm" : "btn-primary text-sm"}>
                        {isCompleted ? "Review" : "Start"}
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link href="/journey/intro">
            <button className="btn-primary mr-4">
              CONTINUE JOURNEY
            </button>
          </Link>
          <Link href="/biases">
            <button className="btn-secondary">
              EXPLORE ALL BIASES
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}