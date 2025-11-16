import { Separator } from "@/components/ui/separator";
import { PostCard, Tpost } from "@/components/server/PostCard";
import { getRecentPosts } from "@/lib/api";

const RECENT_POSTS_LIMIT = 5;

export default async function Home() {
  const posts = await getRecentPosts(RECENT_POSTS_LIMIT);

  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <section className="w-full text-center mt-10">
        <h1 className="text-3xl font-bold mb-3">안녕하세요</h1>
        <p className="text-muted-foreground text-lg">
          프론트엔드 개발자 <span className="font-semibold">강경오</span>입니다.
        </p>
      </section>

      <Separator className="w-full max-w-5xl" />

      {/* Recent Posts */}
      <section className="w-full max-w-5xl flex flex-col gap-4">
        <h2 className="text-xl font-semibold">최근 포스트</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts?.map((post: Tpost) => (
            <PostCard
              key={post.id}
              {...post}
              category={post.category == "proj" ? "projects" : "notes"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
