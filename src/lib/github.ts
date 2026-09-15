import { GitHubRepo, ProjectItem } from '@/types/portfolio';
import { FALLBACK_PROJECTS, PERSONAL_INFO } from '@/data/portfolio-data';
import { getLanguageColor } from './utils';

export async function fetchGitHubRepos(username?: string): Promise<{
  projects: ProjectItem[];
  isFallback: boolean;
  totalReposCount: number;
  error?: string;
}> {
  const targetUser = 
    username || 
    process.env.NEXT_PUBLIC_GITHUB_USERNAME || 
    PERSONAL_INFO.githubUsername || 
    'octocat';

  try {
    const url = `https://api.github.com/users/${encodeURIComponent(targetUser)}/repos?sort=updated&per_page=12&type=owner`;
    
    const res = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Web-App',
      },
      next: { revalidate: 3600 }, // Cache on server for 1 hour
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.warn(`[GitHub API] Failed to fetch repos (${res.status}):`, errorData.message || res.statusText);
      return {
        projects: FALLBACK_PROJECTS,
        isFallback: true,
        totalReposCount: FALLBACK_PROJECTS.length,
        error: errorData.message || `GitHub API returned status ${res.status}`,
      };
    }

    const repos: GitHubRepo[] = await res.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      return {
        projects: FALLBACK_PROJECTS,
        isFallback: true,
        totalReposCount: FALLBACK_PROJECTS.length,
      };
    }

    // Filter out forks if there are enough original repos, or keep them
    const validRepos = repos.filter((r) => !r.name.startsWith('.'));

    const mappedProjects: ProjectItem[] = validRepos.slice(0, 6).map((repo, idx) => ({
      id: repo.id,
      title: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      description: repo.description || 'Repositori open-source interaktif yang dikembangkan dengan standar clean code dan arsitektur modular.',
      primaryLanguage: repo.language || 'Code',
      languageColor: getLanguageColor(repo.language),
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || undefined,
      topics: repo.topics && repo.topics.length > 0 ? repo.topics : ['open-source', 'github-repo'],
      featured: idx < 2,
    }));

    return {
      projects: mappedProjects,
      isFallback: false,
      totalReposCount: repos.length,
    };
  } catch (err: any) {
    console.error('[GitHub API] Unexpected error while fetching repos:', err);
    return {
      projects: FALLBACK_PROJECTS,
      isFallback: true,
      totalReposCount: FALLBACK_PROJECTS.length,
      error: err.message || 'Gagal terhubung ke GitHub API',
    };
  }
}
