// this page contains a hardcoded information

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const teckStacks = {
  frontend: ["React", "Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS"],
  backend: ["NestJs", "Go", "Gin", "PostgreSQL", "SQLite", "REST APIs"],
};

export default function About() {
  return (
    <div className="w-full h-full max-w-3xl mx-auto space-y-10">
      {/* 제목 */}
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="text-sm text-muted-foreground">
          안녕하세요. <br /> 작은 프로젝트를 직접 만들고 운영하며 배우는 것을
          좋아하는 개발자 강경오입니다. <br /> 새로운 기술을 빠르게 익히고, 동작
          원리를 이해하는 데 관심이 많습니다. <br /> 필요한 건 직접 만들어보고,
          실사용 환경에서 검증하는 스타일입니다.
        </p>
      </header>

      <Separator className="w-full max-w-5xl" />

      {/* Tech Stack */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Tech Stack</h2>

        <div className="space-y-3">
          <h3 className="text-xs font-medium uppercase text-muted-foreground">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2">
            {teckStacks.frontend.map((it) => (
              <Badge key={it} variant="outline">
                {it}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xs font-medium uppercase text-muted-foreground">
            Backend
          </h3>
          <div className="flex flex-wrap gap-2">
            {teckStacks.backend.map((it) => (
              <Badge key={it} variant="outline">
                {it}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Separator className="w-full max-w-5xl" />

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Contact</h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-4 py-3 text-sm">
            <span className="font-medium text-muted-foreground">GitHub</span>
            <a
              href="https://github.com/kangko05"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-primary hover:underline md:text-sm"
            >
              github.com/kangko05
            </a>
          </div>

          <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-4 py-3 text-sm">
            <span className="font-medium text-muted-foreground">Email</span>
            <a
              href="mailto:kyungohkang126@gmail.com"
              className="font-mono text-xs text-primary hover:underline md:text-sm break-all"
            >
              kyungohkang126@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
