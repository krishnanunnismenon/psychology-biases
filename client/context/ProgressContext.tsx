"use client";

import { db } from "@/lib/firebase";
import { calculateProgress, getLessonByPath, getNextLesson } from "@/data/lessons";
import { Lesson, UserProgress } from "@/types";
import { useAuth } from "./AuthContext";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  serverTimestamp 
} from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";
import { log } from "console";

type ProgressContextType = {
  progress: number;
  currentLesson: Lesson | null;
  completedLessons: string[];
  loading: boolean;
  markLessonComplete: (lessonId: string) => Promise<void>;
  goToNextLesson: () => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
 
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  
  const [progress, setProgress] = useState<number>(0);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUserProgress = async () => {
      if (!user) {
        setProgress(0);
        setCompletedLessons([]);
        setLoading(false);
        return;
      }

      try {
        const userProgressRef = doc(db, "userProgress", user.uid);
        const userProgressDoc = await getDoc(userProgressRef);

        if (userProgressDoc.exists()) {
          const data = userProgressDoc.data() as UserProgress;
          setCompletedLessons(data.completedLessons || []);
          
          const pathLesson = getLessonByPath(pathname);
          if (pathLesson) {
            setCurrentLesson(pathLesson);
          } else if (data.currentLesson) {
            const savedLesson = getLessonByPath(data.currentLesson);
            if (savedLesson) setCurrentLesson(savedLesson);
          }
          
          setProgress(calculateProgress(data.completedLessons || []));
        } else {
          const pathLesson = getLessonByPath(pathname) || getLessonByPath("/journey/intro");
          if (pathLesson) setCurrentLesson(pathLesson);
          
          await setDoc(userProgressRef, {
            userId: user.uid,
            completedLessons: [],
            currentLesson: pathname,
            lastUpdated: serverTimestamp()
          });
        }
      } catch (error) {
        console.error("Error loading user progress:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserProgress();
  }, [user, pathname]);

  useEffect(() => {
    if (!loading && pathname && user) {
      const lesson = getLessonByPath(pathname);
      if (lesson) {
        setCurrentLesson(lesson);
        updateCurrentLesson(lesson.path);
      }
    }
  }, [pathname, loading, user]);

  const updateCurrentLesson = async (lessonPath: string) => {
    if (!user) return;
    
    try {
      const userProgressRef = doc(db, "userProgress", user.uid);
      await updateDoc(userProgressRef, {
        currentLesson: lessonPath,
        lastUpdated: serverTimestamp()
      });
    } catch (error) {
      console.error("Error updating current lesson:", error);
    }
  };

  const markLessonComplete = async (lessonId: string) => {
    if (!user) return;
    
    try {
      if (!completedLessons.includes(lessonId)) {
        const updatedCompletedLessons = [...completedLessons, lessonId];
        setCompletedLessons(updatedCompletedLessons);
        
        setProgress(calculateProgress(updatedCompletedLessons));
        
        const userProgressRef = doc(db, "userProgress", user.uid);
        await updateDoc(userProgressRef, {
          completedLessons: updatedCompletedLessons,
          lastUpdated: serverTimestamp()
        });
      }
    } catch (error) {
      console.error("Error marking lesson complete:", error);
    }
  };

  const goToNextLesson = () => {
    if (!currentLesson) return;
    
    const next = getNextLesson(currentLesson.id);
    if (next) {
      router.push(next.path);
    }
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        progress, 
        currentLesson, 
        completedLessons, 
        loading, 
        markLessonComplete, 
        goToNextLesson 
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

