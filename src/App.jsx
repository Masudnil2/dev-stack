
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
const { stack, isInStack, addToStack, removeFromStack, removeAll } =
    useStack();

  return (
    <>
      
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />

      <main
        id="technologies"
        className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Explore the <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <TechGrid isInStack={isInStack} onAdd={addToStack} />
          <YourStack
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      </main>
      </div>
    </>
  )
}

export default App
