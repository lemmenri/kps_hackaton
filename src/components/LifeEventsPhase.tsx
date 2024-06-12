import React from 'react'
import { Button } from './ui/button';
import { gamePhases } from '@/lib/gamePhaseTypes';

interface Props {
    gotoNextPhase: (phase: gamePhases) => void
    gewenstePensioenBedrag: number
}

export default function LifeEventsPhase({ gotoNextPhase, gewenstePensioenBedrag }: Props) {
    const handleGotoNextPhase = () => {
        gotoNextPhase(gamePhases.LifeEventsPhase)
    }

    const handleOphalenGegevens = () => {
        gotoNextPhase(gamePhases.LifeEventsPhase)
    }

    return (
        <div className='flex flex-col w-full items-center'>
            <p className='p-4'>Gewenste pensioenbedrag: {gewenstePensioenBedrag}</p>
            <p className='pb-2'>Haal hier je huidige pensioensituatie op bij Mijn Pensioen Overzicht</p>
            <div className='flex space-x-4'>
                <Button onClick={handleOphalenGegevens}>Ophalen bij MPO</Button>
                <Button onClick={handleGotoNextPhase}>Ga annoniem verder!</Button>
            </div>
        </div>
    )
}
