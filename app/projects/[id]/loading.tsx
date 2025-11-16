import { Skeleton } from "@/components/ui/skeleton";

export default function PostDetailLoading() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="h-8 w-2/3" /> {/* title */}
      <Skeleton className="h-4 w-1/2" /> {/* meta */}
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
    </div>
  );
}
