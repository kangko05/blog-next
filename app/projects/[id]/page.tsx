import PostDetail from "@/components/server/PostDetail";

export default async function ProjectsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <PostDetail category="projects" id={Number(id)} />;
}
