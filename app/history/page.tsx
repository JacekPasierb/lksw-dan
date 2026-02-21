import React from "react";
import PageHero from "../../components/user/layout/PageHero";
import TimelineGrid from "../../components/user/history/sections/TimelineGrid";
import HistoryWrap from "../../components/user/history/HistoryWrap";
import ClosingBlock from "../../components/user/history/sections/ClosingBlock";

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="HISTORIA"
        title="Tradycja, która buduje przyszłość."
        desc="Od pierwszych treningów w latach 70. po dzisiejsze LKSW DAN. System, seminaria, doświadczenie i ludzie — to fundament, na którym rośnie nowa generacja zawodników."
        crumbs={[{label: "Home", href: "/"}, {label: "Historia"}]}
        primaryCta={{label: "Poznaj oś czasu", href: "#historia"}}
        secondaryCta={{label: "Treningi i grafik", href: "/trainings#grafik"}}
        accent="gold"
        background={{imageSrc: "/images/coaches.webp", particles: true}}
        rightCard={{
          variant: "start",
          kicker: "DZIEDZICTWO",
          title: "Szkoła, która uczy konsekwencji.",
          desc: [
            "Wiedza przekazywana z pokolenia na pokolenie.",
            "Seminaria, obozy i wspólny system szkolenia.",
            "Społeczność, która trzyma poziom i charakter.",
          ],
          link: {label: "Przejdź do historii", href: "#historia"},
        }}
      />
      <HistoryWrap>
        <TimelineGrid />
        <ClosingBlock />
      </HistoryWrap>
     
    </>
  );
}
