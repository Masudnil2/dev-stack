export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Your Stack</h2>
      <p className="mt-1 text-sm text-slate-400">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {count === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-400">
            Your stack is empty.
          </p>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-2"
            >
              <img src={tech.icon} alt="" className="h-8 w-8 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {tech.name}
                </p>
                <p className="truncate text-xs text-slate-400">
                  {tech.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech)}
                aria-label={`Remove ${tech.name} from your stack`}
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-500"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-full border border-rose-200 bg-rose-50/50 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
