'use client'

import ConclusionPhase from "@/components/ConclusionPhase";
import LifeEventsPhase from "@/components/LifeEventsPhase";
import ProfilePhase from "@/components/ProfilePhase";
import StartScreen from "@/components/StartScreen";
import { gamePhases } from "@/lib/gamePhaseTypes";
import { useState } from "react";

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState<gamePhases>(gamePhases.StartScreen)
  const [totalPensionValue, setTotalPensionValue] = useState<number>(0)
  const [huidigPensioenBedrag, setHuidigPensioenBedrag] = useState<number>(0)

  const handleGoToNextPhase = (currentPhase: gamePhases) => {
    if (currentPhase === gamePhases.ConclusionPhase) {
      setCurrentPhase(gamePhases.StartScreen)
    } else {
      setCurrentPhase(currentPhase + 1)
    }
  }

  const getPensionValue = (value: number) => {
    setTotalPensionValue(value)
  }

  const handleHuidigPensioenBedrag = (value: number) => {
    setHuidigPensioenBedrag(value)
  }

  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-8">
      {currentPhase === gamePhases.StartScreen && <StartScreen gotoNextPhase={handleGoToNextPhase} />}
      {currentPhase === gamePhases.ProfilePhase && <ProfilePhase gotoNextPhase={handleGoToNextPhase} getPensionValue={getPensionValue} />}
      {currentPhase === gamePhases.LifeEventsPhase && <LifeEventsPhase gotoNextPhase={handleGoToNextPhase} gewenstePensioenBedrag={totalPensionValue} huidigPensioenBedrag={handleHuidigPensioenBedrag} />}
      {currentPhase === gamePhases.ConclusionPhase && <ConclusionPhase gotoNextPhase={handleGoToNextPhase} totalPensionValue={totalPensionValue} huidigPensioenBedrag={huidigPensioenBedrag} />}
    </main>
  );
}
