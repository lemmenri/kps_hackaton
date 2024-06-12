import React from 'react'
import Image from 'next/image';

export default function Header() {
    return (
        <header
            id="header"
            className="flex flex-col sm:flex-row px-6 pt-4 sm:pt-1 text-white bg-primary w-full items-center"
        >
            <div className='flex flex-col sm:flex-row w-full items-center'>
                <div className='p-2'>
                    <Image
                        src="/icon.png"
                        width={100}
                        height={100}
                        alt="Golden Years Adventure icon"
                    />
                </div>
                <h1 id="title" className="text-xl my-2 mx-4">
                    Golden Years Adventure
                </h1>
            </div>
        </header>
    )
}
