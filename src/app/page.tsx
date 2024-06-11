'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCardContent, HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";

export default function Home() {
  const handleClick = () => {
    console.log("clicked!")
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="space-y-4 w-full">
        <h1 className="text-3xl font-bold">KPS Hackaton</h1>
        <p>Hallo beste deelnemer!</p>
        <p>Maak een keuze...</p>
        <div className="flex gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Ik wil eerder stoppen met werken</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Om eerder te stoppen met werken
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleClick}>Klik hier!</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ik wil langer doorwerken</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Om langer pensioen op te bouwen
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleClick}>Klik hier!</Button>
            </CardFooter>
          </Card>
        </div>
        <p>Moeilijke woorden kunnen zo van uitleg worden voorzien: </p>
        <HoverCard>
          <HoverCardTrigger>
            <p className="text-blue-500 cursor-pointer">Partner pensioen</p>
          </HoverCardTrigger>
          <HoverCardContent align="start">
            <div className="space-y-2">
              <p>Partnerpensioen is een vorm van pensioenuitkering die wordt uitgekeerd aan de partner van een overleden werknemer of gepensioneerde. In Nederland is dit vaak geregeld via een pensioenfonds of een pensioenregeling bij een werkgever.</p>
              <Button>Meer lezen...</Button>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <p className="text-blue-500 cursor-pointer">Wezen pensioen</p>
          </HoverCardTrigger>
          <HoverCardContent align="start">
            <div className="space-y-2">
              <p>Wezenpensioen is een uitkering die wordt verstrekt aan de kinderen van een overleden werknemer of gepensioneerde. Het doel van wezenpensioen is om financiële ondersteuning te bieden aan de kinderen die achterblijven na het overlijden van hun ouder.</p>
              <Button>Meer lezen...</Button>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </main>
  );
}
