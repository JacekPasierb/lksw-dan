import PageHero from "../components/user/layout/PageHero";

export default function Home() {
  return (
    <>
      <PageHero
        size="home"
        eyebrow="LKSW DAN · SPORTY WALKI · REGION LUBLINA"
        title="Siła. Dyscyplina. Charakter."
        desc="Trenujesz w klubie, nie w „dyscyplinie z listy”. Trener dobiera plan pod grupę i poziom — technika, dynamika, kondycja, praca zadaniowa..."
        primaryCta={{label: "Dołącz do klubu", href: "/trainings"}}
        secondaryCta={{label: "Sprawdź grafik", href: "/trainings#grafik"}}
        highlights={["Plan wejścia", "Grupy poziomami"]}
        accent="red"
        background={{imageSrc: "/images/hero-home.webp", particles: true}}
      />
    </>
  );
}

//  <section id="hero" className="min-h-screen pt-32 scroll-mt-32">
//       {/* pt-32 bo masz fixed nav */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-bold text-white">LKSW DAN</h1>
//         <p className="mt-4 text-white/70">
//           Treningi MMA, boksu i kickboxingu w Lublinie.
//         </p>
//       </div>
//     </section>

//     <section id="dlaczego" className="scroll-mt-32 py-24 scroll-mt-32">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl font-bold">Dlaczego LKSW DAN?</h2>
//         {/* content */}
//       </div>
//     </section>

//     <section id="kontakt" className="scroll-mt-32 py-24 scroll-mt-32">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl font-bold">Kontakt</h2>
//         {/* content */}
//       </div>
//     </section>
