const BADGE_STYLES = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "SSR / Edge": "bg-violet-50 text-violet-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-orange-50 text-orange-600",
  Essential: "bg-indigo-50 text-indigo-600",
  Robust: "bg-pink-50 text-pink-600",
  Modern: "bg-emerald-50 text-emerald-600",
  Containers: "bg-sky-50 text-sky-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } =
    tech;

  return (
    <div className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      {badge && (
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            BADGE_STYLES[badge] ?? "bg-slate-100 text-slate-600"
          }`}
        >
          {badge}
        </span>
      )}

      <img src={icon} alt={`${name} logo`} className="h-9 w-9" loading="lazy" />

      <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm text-slate-500">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {category}
        </span>
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
          {difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-slate-900">
          <span aria-hidden="true" className="text-amber-400">
            ★
          </span>
          {rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}