import { Tpost } from "./types";

const BASE_URL = "http://localhost:8000";

export class ApiError extends Error {
  constructor(
    public status?: number,
    message?: string
  ) {
    super(message);
  }
}

const apiFetch = async <T>(to: string, cache: RequestCache = "default") => {
  try {
    const reqUrl = to.startsWith("http") ? to : `${BASE_URL}${to}`;

    const resp = await fetch(reqUrl, { cache });

    if (!resp.ok) throw new ApiError(resp.status, `Api Error: ${resp.status}`);

    return resp.json() as Promise<T>;
  } catch (err) {
    if (err instanceof ApiError) throw err;

    throw new ApiError(undefined, "Network Error");
  }
};

export const getPost = async (id: number) => apiFetch<Tpost>(`/posts/${id}`, "no-store");

export const getProjects = async () => apiFetch<Tpost[]>("/projects", "no-store");

export const getNotes = async () => apiFetch<Tpost[]>("/notes", "no-store");

export const getRecentPosts = async (limit: number) =>
  apiFetch<Tpost[]>(`/posts/recent?limit=${limit}`, "no-store");
