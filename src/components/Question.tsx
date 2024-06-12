import Image, { StaticImageData } from 'next/image';
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
// import appartement from '../app/images/vraag1/appartement.png'
// import rijtjeshuis from '../app/images/vraag1/rijtjeshuis.png'
// import villa from '../app/images/vraag1/villa.png'
// import vrijstaande_woning from '../app/images/vraag1/vrijstaande_woning.png'
import { Vraag } from './ProfilePhase';

// const appartementImage = appartement;
interface Props {
    vraag: Vraag,
    selectedAnswer: (id: number) => void
}

// const getImageData = (vraag: number, antwoord: number): StaticImageData => {
// return appartementImage
// 
// }

export default function Question({ vraag, selectedAnswer }: Props) {
    console.log(`/images/vragen/${vraag.antwoorden[0].naam}`)
    const handleClick = (id: number) => {
        selectedAnswer(id)
    }

    return (
        <>
            <p className='p-2 text-3xl'>{vraag.tekst}</p>
            <div className='flex flex-auto gap-4'>
                {vraag.antwoorden.map((antwoord, index) => (
                    <Card key={index}>
                        <CardContent>
                            <img
                                // src={`/../app/images/vragen/${antwoord.naam}.png`}
                                // src={getImageData(0, 0)}
                                src={antwoord.img_uri}
                                // src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nlwoerdenweideblbuilding.jpg/260px-Nlwoerdenweideblbuilding.jpg'}
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
