'use client'

import ConclusionPhase from "@/components/ConclusionPhase";
import LifeEventsPhase from "@/components/LifeEventsPhase";
import ProfilePhase from "@/components/ProfilePhase";
import StartScreen from "@/components/StartScreen";
import { useState } from "react";

export enum gamePhases {
  StartScreen,
  ProfilePhase,
  LifeEventsPhase,
  ConclusionPhase,
}

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState<gamePhases>(gamePhases.StartScreen)

  const handleGoToNextPhase = (currentPhase: gamePhases) => {
    if (currentPhase === gamePhases.ConclusionPhase) {
      setCurrentPhase(gamePhases.StartScreen)
    } else {
      setCurrentPhase(currentPhase + 1)
    }
  }

  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-24">
      {currentPhase === gamePhases.StartScreen && <StartScreen gotoNextPhase={handleGoToNextPhase} />}
      {currentPhase === gamePhases.ProfilePhase && <ProfilePhase gotoNextPhase={handleGoToNextPhase} />}
      {currentPhase === gamePhases.LifeEventsPhase && <LifeEventsPhase gotoNextPhase={handleGoToNextPhase} />}
      {currentPhase === gamePhases.ConclusionPhase && <ConclusionPhase gotoNextPhase={handleGoToNextPhase} />}
    </main>
  );
}
