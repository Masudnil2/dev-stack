import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Build your perfect{" "}
            <span className="text-brand-gradient">developer stack</span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-slate-600 sm:text-lg">
            Browse frontend, backend, database, and tooling picks side by
            side, then collect the ones you actually want to use on your next
            project — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="bg-brand-gradient rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="Layered illustration of a developer technology stack"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}