import Image from 'next/image';
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
// import appartement from '../app/images/vraag1/appartement.png'
// import rijtjeshuis from '../app/images/vraag1/rijtjeshuis.png'
// import villa from '../app/images/vraag1/villa.png'
// import vrijstaande_woning from '../app/images/vraag1/vrijstaande_woning.png'
import { Vraag } from './ProfilePhase';


interface Props {
    vraag: Vraag,
    selectedAnswer: (id: number) => void
}

export default function Question({ vraag, selectedAnswer }: Props) {
    console.log(`/images/vragen/${vraag.antwoorden[0].naam}`)
    const handleClick = (id: number) => {
        selectedAnswer(id)
    }

    return (
        <>
            <p>{vraag.tekst}</p>
            <div className='flex flex-auto gap-4'>
                {vraag.antwoorden.map((antwoord, index) => (
                    <Card key={index}>
                        <CardContent>
                            <Image
                                src={`/../app/images/vragen/${antwoord.naam}.png`}
                                width={200}
                                height={200}
                                alt={antwoord.naam}
                            />
                        </CardContent>
                        <CardFooter>
                            <Button onClick={() => handleClick(antwoord.id)}>{antwoord.naam}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}
