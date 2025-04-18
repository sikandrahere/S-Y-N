import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/moving-border";


const HeroSection1 = () => {
    const words = ["Thoughts", "Voice", "Freedom"];
    return (

        <div>
            <div>
                <BackgroundLines className="flex items-center justify-center w-full h-[100vh] flex-col px-4">
                    <h2
                        className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        " Your
                        <FlipWords words={words} />" <br />
                        " Be Anonymous "
                    </h2>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
                >
                    <p className="font-bold ">Unleash Your Voice</p>
                </Button>
                </BackgroundLines>
            </div>
            

        </div>
    )
}

export default HeroSection1