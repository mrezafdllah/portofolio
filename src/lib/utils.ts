import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  Go: '#00ADD8',
  Rust: '#DEA584',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Java: '#B07219',
  'C++': '#F34B7D',
  C: '#555555',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Shell: '#89E051',
  PostgreSQL: '#336791',
  Vue: '#4FC08D',
  Dart: '#00B4AB',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Other: '#64748B',
};

export function getLanguageColor(language: string | null | undefined): string {
  if (!language) return LANGUAGE_COLORS.Other;
  return LANGUAGE_COLORS[language] || '#38BDF8';
}
