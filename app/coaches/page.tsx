import React from "react";
import PageHero from "../../components/user/layout/PageHero";
import TrainersSection from "../../components/user/coaches/sections/TrainersSections";
// jeśli masz sekcję trenerów na tej podstronie, podepnij anchor np. #lista
// import TrainersSection from "../../components/user/trainers/sections/TrainersSection";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="TRENERZY"
        title="Poznaj kadrę, która dowozi progres."
        desc="Instruktorzy prowadzący, doświadczenie i szybki kontakt. Niezależnie czy zaczynasz, czy trenujesz od lat — pomożemy dobrać grupę, cel i tempo."
        crumbs={[{label: "Home", href: "/"}, {label: "Trenerzy"}]}
        primaryCta={{label: "Zobacz trenerów", href: "#lista"}}
        secondaryCta={{label: "Kontakt", href: "#kontakt"}}
        accent="red"
        background={{imageSrc: "/images/coaches.webp", particles: true}}
        rightCard={{
          variant: "start",
          kicker: "KADRA",
          title: "Trenuj pod okiem specjalistów",
          desc: [
            "Każda grupa ma prowadzącego i plan pracy.",
            "Technika, dynamika i przygotowanie motoryczne.",
            "Bezpieczny system sparingów i progres krok po kroku.",
          ],
          link: {label: "Napisz / zadzwoń", href: "#kontakt"},
        }}
      />
      <TrainersSection />
      {/* Tu wstaw sekcję trenerów i daj jej id="lista" */}
      {/* <section id="lista"><TrainersSection /></section> */}
    </>
  );
}
