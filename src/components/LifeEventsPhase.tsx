import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import { gamePhases } from '@/lib/gamePhaseTypes';
import conclusieImg from '@/app/images/conclusieImg.png'

interface Props {
    gotoNextPhase: (phase: gamePhases) => void
    huidigPensioenBedrag: (bedrag: number) => void
    gewenstePensioenBedrag: number
}

const mockPensioenBedrag = 500

export default function LifeEventsPhase({ gotoNextPhase, huidigPensioenBedrag, gewenstePensioenBedrag }: Props) {
    const handleGotoNextPhase = () => {
        huidigPensioenBedrag(mockPensioenBedrag)
        gotoNextPhase(gamePhases.LifeEventsPhase)
    }

    const handleOphalenGegevens = () => {
        huidigPensioenBedrag(mockPensioenBedrag)
        gotoNextPhase(gamePhases.LifeEventsPhase)
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
            <p className='text-xl p-4'>Hier heb je ongeveer zoveel pensioen voor nodig: {gewenstePensioenBedrag}</p>
            <p className='text-xl pb-2'>Haal hier je huidige pensioensituatie op bij Mijn Pensioen Overzicht</p>
            <div className='flex space-x-4'>
                <Button onClick={handleOphalenGegevens}>Ophalen bij MPO</Button>
                <Button onClick={handleGotoNextPhase}>Ga annoniem verder!</Button>
            </div>
        </div>
    )
}
