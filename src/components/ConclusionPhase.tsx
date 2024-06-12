import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import { gamePhases } from '@/lib/gamePhaseTypes';
import conclusieImg from '@/app/images/conclusieImg.png'

interface Props {
    gotoNextPhase: (phase: gamePhases) => void,
    totalPensionValue: number
    huidigPensioenBedrag: number
}

export default function ConclusionPhase({ gotoNextPhase, totalPensionValue, huidigPensioenBedrag }: Props) {
    const handleGotoNextPhase = () => {
        gotoNextPhase(gamePhases.ConclusionPhase)
    }

    return (
        <div className='flex flex-col w-full items-center'>
            <p className=' text-3xl p-4'>Je ideale pensioen ziet er zo uit:</p>
            <div className='p-2'>
                <Image
                    src={conclusieImg}
                    width={400}
                    height={400}
                    alt="Conclusie image"
                />
            </div>
            <p className='text-xl p-4'>Hier heb je ongeveer zoveel pensioen voor nodig: {totalPensionValue}</p>
            <p className='text-xl'>Volgens je laatste gegevens kom je nu uit op een pensioenbedrag van ongeveer: {huidigPensioenBedrag}</p>
            {totalPensionValue > huidigPensioenBedrag && (
                <p className='p-2 text-xl font-bold'>Dit betekend dat je nog niet genoeg hebt opgebouwd om je droom waar te kunnen maken!</p>
            )}
            {totalPensionValue === huidigPensioenBedrag && (
                <p className='p-2 text-xl font-bold'>Dit betekend dat je precies op de juiste weg bent om je dromen waar te kunnen maken!</p>
            )}
            {totalPensionValue < huidigPensioenBedrag && (
                <p className='p-2 text-xl font-bold'>Dit betekend dat je misschien wel meer dromen waar kunt gaan maken!</p>
            )}
            <br />
            <Button onClick={handleGotoNextPhase}>Nog eens proberen?</Button>
        </div>
    )
}
