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
        img_uri: string,
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
                    img_uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nlwoerdenweideblbuilding.jpg/260px-Nlwoerdenweideblbuilding.jpg",
                    waarde: 260,
                },
                {
                    id: 1,
                    naam: "Rijtjeshuis",
                    img_uri: "https://cdn.cbs.nl/images/6c544435792f56565844344b67534e686f3964532b413d3d/900x450.jpg",
                    waarde: 390,
                },
                {
                    id: 2,
                    naam: "Vrijstaande woning",
                    img_uri: "https://www.poppink.nl/wp-content/uploads/2019/09/hooge-boekel-variant-9.jpg",
                    waarde: 520,
                },
                {
                    id: 3,
                    naam: "Villa",
                    img_uri: "https://static.independent.co.uk/2024/01/09/12/FAO_83054_Villa_Mangas_Albufeira_0723_01_RGB-136-DPI-For-Web.jpg",
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
                    img_uri: "https://galekkeropvakantie.nl/wp-content/uploads/2020/10/thuis-vakantie-houden.jpg",
                    waarde: 100,
                },
                {
                    id: 1,
                    naam: "Op de camping",
                    img_uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQs6QwF1WciyP4-1o7slrIyzWBjNe4IV_7vA&s",
                    waarde: 200,
                },
                {
                    id: 2,
                    naam: "Vakantiehuis huren",
                    img_uri: "https://cdn-cms.bookingexperts.nl/media/838/9/optimized.jpg",
                    waarde: 300,
                },
                {
                    id: 3,
                    naam: "Verre reizen maken",
                    img_uri: "https://blog.dejongintra.nl/wp-content/uploads/2020/01/Indonesie-Bali-tempel.jpg",
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
                    img_uri: "https://www.leefjepensioen.nl/wp-content/uploads/2015/11/lezen-2.jpg",
                    waarde: 100,
                },
                {
                    id: 1,
                    naam: "Sporten",
                    img_uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJGLZPVwl_b8AzZ9tzraVYHboVjsdL6nghg&s",
                    waarde: 200,
                },
                {
                    id: 2,
                    naam: "Activiteiten met de kleinkinderen ",
                    img_uri: "https://www.thuiscreche.nl/inhoud/uploads/TC_Jippie_1_870x600_acf_cropped-1-870x600.jpeg",
                    waarde: 300,
                },
                {
                    id: 3,
                    naam: "Zeilen",
                    img_uri: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Edenflip.JPG",
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
                We stellen je nu een aantal vragen om een beeld te krijgen van wat je wilt na je pensioen.
            </h1>
            <div className='flex flex-col space-y-4 w-full items-center'>
                <Question vraag={vragen[currentQuestion]} selectedAnswer={handleSelectAnswer} />
                {/* <p>Benodigd pensioenbedrag: {pensionValue}</p> */}
            </div>
        </div>
    )
}
