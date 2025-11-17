import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { getPost } from "@/lib/api";
import { Tpost } from "@/lib/types";

export default async function PostDetail({
  category,
  id,
}: {
  category: Tpost["category"];
  id: number;
}) {
  const post = await getPost(id);

  return (
    <div className="w-full h-full overflow-auto">
      {/* Back */}
      <Link
        href={`/${category}`}
        className="text-sm text-muted-foreground hover:underline"
      >
        {`<- Back to ${category}`}
      </Link>

      {/* header */}
      <div className="mt-6 flex items-center gap-3 flex-wrap">
        <Badge>{category}</Badge>
        {post.tags?.map((t: string) => (
          <Badge variant="outline" key={t}>
            {t}
          </Badge>
        ))}

        {post.created_at && (
          <span className="text-sm text-muted-foreground">
            {new Date(post.created_at).toLocaleDateString()}
          </span>
        )}
      </div>

      {/* article(markdown) */}
      <article className="mt-8 markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
