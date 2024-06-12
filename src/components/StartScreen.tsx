import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import { gamePhases } from '@/lib/gamePhaseTypes';

interface Props {
    gotoNextPhase: (phase: gamePhases) => void
}

export default function StartScreen({ gotoNextPhase }: Props) {
    const handleStart = () => {
        gotoNextPhase(gamePhases.StartScreen)
    }

    return (
        <div className='flex flex-col w-full items-center'>
            <div className='p-2'>
                <Image
                    src="/icon.png"
                    width={538}
                    height={550}
                    alt="Golden Years Adventure icon"
                />
            </div>
            <h1 id="title" className="text-xl my-2 mx-4">
                Golden Years Adventure
            </h1>
            <Button onClick={handleStart}>Start game!</Button>
        </div>
    )
}
