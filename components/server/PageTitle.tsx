export function PageTitle({ label }: { label: string }) {
  return (
    <>
      {/* mobile title */}
      <h1 className="md:hidden text-2xl font-bold tracking-tight">{label}</h1>
      {/* desktop title */}
      <h2 className="hidden md:block text-xl font-semibold tracking-tight">{label}</h2>
    </>
  );
}
