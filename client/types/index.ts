export type UserProgress = {
    userId: string;
    completedLessons: string[];
    currentLesson: string;
    lastUpdated: Date;
  };
  
  export type Lesson = {
    id: string;
    title: string;
    path: string;
    order: number;
  };