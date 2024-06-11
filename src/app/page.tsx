'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
      </div>
    </main>
  );
}
