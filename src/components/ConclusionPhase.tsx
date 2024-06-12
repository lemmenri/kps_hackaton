import React from 'react'
import { Button } from './ui/button';
import { gamePhases } from '@/lib/gamePhaseTypes';

interface Props {
    gotoNextPhase: (phase: gamePhases) => void,
    totalPensionValue: number
}

export default function ConclusionPhase({ gotoNextPhase, totalPensionValue }: Props) {
    const handleGotoNextPhase = () => {
        gotoNextPhase(gamePhases.ConclusionPhase)
    }

    return (
        <div className='flex flex-col w-full items-center'>
            <h1 id="title" className="text-xl my-2 mx-4">
                Conclusie
            </h1>
            <p>Je hebt zoveel pensioen nodig: {totalPensionValue}</p>
            <Button onClick={handleGotoNextPhase}>Start again!</Button>
        </div>
    )
}
