import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import { gamePhases } from '@/lib/gamePhaseTypes';
import conclusieImg from '@/app/images/conclusieImg.png'

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
            <p className=' text-3xl p-4'>Je ideale pensioen ziet er zo uit:</p>
            <div className='p-2'>
                <Image
                    src={conclusieImg}
                    width={400}
                    height={400}
                    alt="Conclusie image"
                />
            </div>
            <p className='text-3xl p-4'>Hier heb je ongeveer zoveel pensioen voor nodig: {totalPensionValue}</p>
            <Button onClick={handleGotoNextPhase}>Nog eens proberen?</Button>
        </div>
    )
}
