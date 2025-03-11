"use client";

import { useProgress } from "@/context/ProgressContext";

const ProgressBar = () => {
  const { progress } = useProgress();
  
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div 
        className="progress-bar h-2.5" 
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className="sr-only">{progress}% Complete</span>
      </div>
    </div>
  );
};

export default ProgressBar;