import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { extractDescription, formatDate } from "@/lib/utils";

export type Tpost = {
  id: number;
  title: string;
  content: string;
  category: "note" | "proj";
  tags: string[];
  created_at?: string;
};

export function PostCard({ id, title, content, tags, created_at }: Tpost) {
  return (
    <Link href={`/posts/${id}`}>
      <article className="h-full rounded-xl border bg-card p-5 transition-colors hover:bg-card/70">
        {/* title */}
        <h3 className="font-semibold text-lg leading-tight text-foreground">{title}</h3>

        {/* descriptions */}
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {extractDescription(content)}
        </p>

        {/* tags */}
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* date */}
        {created_at && (
          <div className="mt-4 text-xs text-muted-foreground">{formatDate(created_at)}</div>
        )}
      </article>
    </Link>
  );
}
