export default function Home() {
  return (
    <>
      <section id="hero" className="min-h-screen pt-32">
        {/* pt-32 bo masz fixed nav */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">LKSW DAN</h1>
          <p className="mt-4 text-white/70">
            Treningi MMA, boksu i kickboxingu w Lublinie.
          </p>
        </div>
      </section>

      <section id="dlaczego" className="scroll-mt-32 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Dlaczego LKSW DAN?</h2>
          {/* content */}
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-32 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Kontakt</h2>
          {/* content */}
        </div>
      </section>
    </>
  );
}
