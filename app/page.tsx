import { Link } from "@nextui-org/link";
import { button, button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import ImgCard from "./ImgCard";

export default function Home() {
  return (
    <div>
      <div className="relative h-64 md:h-screen w-full bg-cover bg-center md:bg-[center_top] bg-[url('/images/hero.jpg')]">
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        {/*Here text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-5 md:pl-10 max-w-lg space-y-4">
          <span className={`${title()} text-white`}>
            Luxury cars, Expert service, European excellence.
          </span>
          <Button
            className={`${buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })} mt-4`}
          >
            REQUEST APPOINTMENT
          </Button>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Services</span>
        </div>
        <section className="py-4 px-4 md:px-12 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            <div>
              <ImgCard
                imgAlt="A/C Repair"
                imgSrc="images/acrepair.jpg"
                title="A/C Repair"
                imgCaption=""
              />
            </div>
            <div>
              <ImgCard
                imgAlt="BMW Drivetrains"
                imgSrc="images/bmwdrivetrain.jpg"
                title="BMW Drivetrain Repair"
                imgCaption=""
              />
            </div>
            <div>
              <ImgCard
                imgAlt="Mufflers/Exhaust"
                imgSrc="images/muffler.jpg"
                title="Mufflers/Exhaust"
                imgCaption=""
              />
            </div>
            <div>
              <ImgCard
                imgAlt="Cooling System Repair"
                imgSrc="images/coolingsystem.jpg"
                title="Cooling System Repair"
                imgCaption=""
              />
            </div>
            <div>
              <ImgCard
                imgAlt="Serpentine,Driving & Timing Belts"
                imgSrc="images/belts.png"
                title="Serpentine,Driving & Timing Belts"
                imgCaption=""
              />
            </div>
            <div>
              <ImgCard
                imgAlt="Steering & Suspension"
                imgSrc="images/suspension.jpg"
                title="Steering & Suspension"
                imgCaption=""
              />
            </div>
          </div>
        </section>

        <div className="text-center bg-background">
          <span className={title()}>Vehicles we service</span>
          <div className="flex justify-center items-center gap-8 mt-8">
            {/* BMW Logo */}
            <Image
              src="/images/BMW.svg.png"
              alt="BMW Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            {/* Porsche 
            <Image
              src="/images/porschelogo.png"
              alt="BMW Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            */}
            <Image
              src="/images/benzlogo.png"
              alt="BMW Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
