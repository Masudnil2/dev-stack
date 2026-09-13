import logo from "../assets/logo-text.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="transition-colors hover:text-slate-900"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:inline-block">
            Sign In
          </button>
          <button className="bg-brand-gradient rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
