import PostDetail from "@/components/server/PostDetail";

export default async function NotesDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <PostDetail category="notes" id={Number(id)} />;
}
