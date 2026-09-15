export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export type SkillCategory = 
  | 'Languages' 
  | 'Frontend' 
  | 'Backend & API' 
  | 'Database & Cloud' 
  | 'Tools & Workflow';

export interface SkillItem {
  name: string;
  iconName: string;
  category: SkillCategory;
  level?: string; // e.g. 'Advanced', 'Proficient'
  color?: string;
}

export interface ProjectItem {
  id: string | number;
  title: string;
  description: string;
  primaryLanguage: string;
  languageColor?: string;
  stars: number;
  forks?: number;
  githubUrl: string;
  liveUrl?: string;
  topics?: string[];
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
