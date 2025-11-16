export type Tpost = {
  id: number;
  title: string;
  content: string;
  category: "notes" | "projects" | "proj";
  tags: string[];
  created_at?: string;
};
