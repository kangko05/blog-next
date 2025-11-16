import { Skeleton } from "@/components/ui/skeleton";

export default function NotesLoading() {
  return (
    <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-xl border bg-card p-5 flex flex-col gap-3">
          <Skeleton className="h-5 w-3/4" /> {/* title */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" /> {/* description */}
          <Skeleton className="h-4 w-[60%]" />
        </div>
      ))}
    </div>
  );
}
