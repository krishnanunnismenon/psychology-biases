import { Lesson } from "@/types";

export const lessons: Lesson[] = [
  {
    id: "intro",
    title: "Introduction",
    path: "/journey/blurred",
    order: 1
  },
  {
    id: "question",
    title: "Question",
    path: "/journey/question",
    order: 2
  },
  {
    id: "hindsight-bias",
    title: "Hindsight Bias",
    path: "/journey/bias",
    order: 3
  },
  {
    id: "action-bias",
    title: "Action Bias",
    path: "/biases/action-bias",
    order: 4
  },
  {
    id: "confirmation-bias",
    title: "Confirmation Bias",
    path: "/biases/confirmation-bias",
    order: 5
  },
  {
    id: "anchoring-bias",
    title: "Anchoring Bias",
    path: "/biases/anchoring-bias",
    order: 6
  },
  {
    id: "cashless-effect",
    title: "Cashless Effect",
    path: "/biases/cashless-effect",
    order: 7
  }
];

export const getTotalLessons = (): number => {
  return lessons.length;
};

export const getLessonByPath = (path: string): Lesson | undefined => {
  return lessons.find(lesson => lesson.path === path);
};

export const getNextLesson = (currentLessonId: string): Lesson | undefined => {
  const currentLesson = lessons.find(lesson => lesson.id === currentLessonId);
  if (!currentLesson) return undefined;
  
  const nextOrder = currentLesson.order + 1;
  return lessons.find(lesson => lesson.order === nextOrder);
};

export const calculateProgress = (completedLessons: string[]): number => {
  if (lessons.length === 0) return 0;
  return Math.round((completedLessons.length / lessons.length) * 100);
};