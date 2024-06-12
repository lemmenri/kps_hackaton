import React from 'react'
import { Button } from './ui/button';
import { gamePhases } from '@/lib/gamePhaseTypes';

interface Props {
    gotoNextPhase: (phase: gamePhases) => void
}

export default function ProfilePhase({ gotoNextPhase }: Props) {
    const handleGotoNextPhase = () => {
        gotoNextPhase(gamePhases.ProfilePhase)
    }

    return (
        <div className='flex flex-col w-full items-center'>
            <h1 id="title" className="text-xl my-2 mx-4">
                Profiel
            </h1>
            <Button onClick={handleGotoNextPhase}>Ga verder!</Button>
        </div>
    )
}
