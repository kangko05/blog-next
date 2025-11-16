import { PostCard, Tpost } from "@/components/server/PostCard";
import { PageTitle } from "@/components/server/PageTitle";
import { getProjects } from "@/lib/api";

export default async function Projects() {
  const t = await getProjects();

  return (
    <div className="w-full h-full overflow-auto flex flex-col gap-6">
      <PageTitle label="Projects" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.map((projects: Tpost) => (
          <PostCard key={projects.id} {...projects} category="projects" />
        ))}
      </div>
    </div>
  );
}
