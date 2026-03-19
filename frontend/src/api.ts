import { fallbackProfile, fallbackProjects, fallbackResume } from "./data/fallback";
import type { Profile, Project, ResumePayload } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8000";

async function request<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

export function getProfile(): Promise<Profile> {
  return request("/api/profile", fallbackProfile);
}

export function getProjects(): Promise<Project[]> {
  return request("/api/projects", fallbackProjects);
}

export function getResume(): Promise<ResumePayload> {
  return request("/api/resume", fallbackResume);
}
