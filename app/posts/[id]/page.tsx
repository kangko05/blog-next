async function getPost(id: string) {
  const res = await fetch(`http://localhost:8000/posts/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);

  return <h1>{`${post.id}: ${post.title}`}</h1>;
}
