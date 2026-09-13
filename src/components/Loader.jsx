export default function Loader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-4 py-24"
    >
      <span
        className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-pink"
        aria-hidden="true"
      />
      <p className="text-sm text-slate-500">Loading technologies…</p>
    </div>
  );
}
