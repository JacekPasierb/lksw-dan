import React from "react";
import PageHero from "../../components/user/layout/PageHero";
import ScheduleSection from "../../components/user/trainings/sections/SheduleSection";

export default function Page() {
    return (
      <>
        <PageHero
          eyebrow="TRENINGI"
          title="Grafik, grupy i wszystko co trzeba — w jednym miejscu."
          desc="Sprawdź aktualny grafik i wybierz trening. Nowi? Pomożemy dobrać grupę i powiemy co zabrać. Obecni zawodnicy — tu znajdziecie plan tygodnia i szybki kontakt."
          crumbs={[{label: "Home", href: "/"}, {label: "Treningi"}]}
          primaryCta={{label: "Sprawdź grafik", href: "#grafik"}}
          secondaryCta={{label: "Kontakt", href: "#kontakt"}}
          accent="red"
          background={{imageSrc: "/images/hero-training.png", particles: true}}
          rightCard={{
            variant: "start",
            kicker: "SZYBKI START",
            title: "Wejście do treningów",
            desc: [
              "Przyjdź na trening (sprawdź grafik poniżej).",
              "Trener dobierze grupę i poziom.",
              "Dostajesz jasny plan działania — resztę dowiezie system.",
            ],
            link: {label: "Zapisy / kontakt", href: "/trainings#zapisy"},
          }}
        />
        <ScheduleSection />
      </>
    );
}
