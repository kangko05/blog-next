export default function GlobalLoading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-6">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />

      <p className="mt-4 text-sm text-muted-foreground">loading...</p>
    </div>
  );
}
