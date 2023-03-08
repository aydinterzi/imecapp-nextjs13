export type RelevantSkills = {
  id: string;
  skill: string;
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
