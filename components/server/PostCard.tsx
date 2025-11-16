import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { extractDescription, formatDate } from "@/lib/utils";
import { Tpost } from "@/lib/types";

export function PostCard({ id, title, category, content, tags, created_at }: Tpost) {
  return (
    <Link href={`/${category}/${id}`}>
      <article className="h-full rounded-xl border bg-card p-5 transition-colors hover:bg-card/70 flex flex-col justify-between gap-5">
        <div>
          {/* title */}
          <h3 className="font-semibold text-lg leading-tight text-foreground">{title}</h3>

          {/* descriptions */}
          <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
            {extractDescription(content)}
          </p>
        </div>

        <div>
          {/* tags */}
          <div className="flex flex-wrap gap-2">
            <Badge>{category}</Badge>

            {tags && tags.length > 0 && (
              <>
                {tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </>
            )}
          </div>

          {/* date */}
          {created_at && (
            <div className="mt-4 text-xs text-muted-foreground">{formatDate(created_at)}</div>
          )}
        </div>
      </article>
    </Link>
  );
}
