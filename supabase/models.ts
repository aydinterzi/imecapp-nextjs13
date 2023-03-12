// define role types
export const roles = [
  "frontend",
  "backend",
  "fullstack",
  "mobile",
  "devops",
  "designer",
  "product",
  "manager",
  "other",
] as const;

export const programming_languages = [
  "javascript",
  "typescript",
  "python",
  "ruby",
  "java",
  "c",
  "c++",
  "c#",
  "go",
  "php",
  "swift",
  "kotlin",
  "rust",
  "scala",
  "dart",
  "other",
] as const;

export type RelevantSkills = {
  id: string;
  role: typeof roles[number];
  programming_language: typeof programming_languages[number];
  founded: boolean;
};

export type Ad = {
  id: string;
  title: string;
  description: string;
  relevant_skills: RelevantSkills[];
  created_at: string;
  updated_at: string;
  user_id: string;
};
