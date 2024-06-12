import React, { useState } from 'react'
import { gamePhases } from '@/lib/gamePhaseTypes';
import Question from './Question';


interface Props {
    gotoNextPhase: (phase: gamePhases) => void
    getPensionValue: (value: number) => void
}

export type Vraag = {
    tekst: string,
    antwoorden: {
        id: number,
        naam: string,
        waarde: number
    }[]
}

export default function ProfilePhase({ gotoNextPhase, getPensionValue }: Props) {
    const [pensionValue, setPensionValue] = useState<number>(0)
    const [currentQuestion, setcurrentQuestion] = useState<number>(0)

    const vragen: Vraag[] = [
        {
            tekst: "Hoe wil je wonen nadat je stopt met werken?",
            antwoorden: [
                {
                    id: 0,
                    naam: "Appartement",
                    waarde: 260,
                },
                {
                    id: 1,
                    naam: "Rijtjeshuis",
                    waarde: 390,
                },
                {
                    id: 2,
                    naam: "Vrijstaande woning",
                    waarde: 520,
                },
                {
                    id: 3,
                    naam: "Villa",
                    waarde: 700,
                },
            ]
        },
        {
            tekst: "Hoe zou je vakantie willen vieren in de toekomst?",
            antwoorden: [
                {
                    id: 0,
                    naam: "Thuis",
                    waarde: 100,
                },
                {
                    id: 1,
                    naam: "Op de camping",
                    waarde: 200,
                },
                {
                    id: 2,
                    naam: "Vakantiehuis huren",
                    waarde: 300,
                },
                {
                    id: 3,
                    naam: "Verre reizen maken",
                    waarde: 400,
                },
            ]
        },
        {
            tekst: "Welke hobby's spreken je aan als je stopt met werken",
            antwoorden: [
                {
                    id: 0,
                    naam: "Lezen",
                    waarde: 100,
                },
                {
                    id: 1,
                    naam: "Sporten",
                    waarde: 200,
                },
                {
                    id: 2,
                    naam: "Activiteiten met de kleinkinderen ",
                    waarde: 300,
                },
                {
                    id: 3,
                    naam: "Zeilen",
                    waarde: 400,
                },
            ]
        },
    ]

    const handleSelectAnswer = (id: number) => {
        setPensionValue(pensionValue + vragen[currentQuestion].antwoorden[id].waarde)
        if (currentQuestion < (vragen.length - 1)) {
            console.log(vragen.length)
            setcurrentQuestion(currentQuestion + 1)
        } else {
            getPensionValue(pensionValue)
            gotoNextPhase(gamePhases.ProfilePhase)
        }
    }

    return (
        <div className='flex flex-col w-full items-center'>
            <h1 id="title" className="text-xl my-2 mx-4">
                Profiel
            </h1>
            <div className='flex flex-col space-y-4 w-full items-center'>
                <Question vraag={vragen[currentQuestion]} selectedAnswer={handleSelectAnswer} />
                <p>Benodigd pensioenbedrag: {pensionValue}</p>
            </div>
        </div>
    )
}
