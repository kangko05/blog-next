"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
      <h1 className="text-2xl font-semibold text-foreground mb-3">문제가 발생했습니다</h1>

      <p className="text-muted-foreground mb-6 max-w-md">잠시 후 다시 시도해주세요.</p>

      <div className="flex gap-3 mt-2">
        <Button variant="secondary" onClick={() => reset()}>
          다시 시도
        </Button>

        <Button onClick={() => (window.location.href = "/")}>홈으로 이동</Button>
      </div>
    </div>
  );
}
