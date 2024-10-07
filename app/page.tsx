import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button, button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import ImgCard from "./ImgCard";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={`${title()} text-primary`}>
            SERVICING GERMAN&nbsp;
          </span>
          <br></br>
          <span className={title()}>MOTORS IN</span>
          <br></br>
          <span className={`${title()} text-accent`}> LAS VEGAS&nbsp;</span>
          <br />
          <span className={title()}>SINCE 1982</span>
          <br></br>
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
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-x-8">
          <div className="text-center">
            <span className={title()}>FIX YOUR CAR TODAY</span>
            <hr className="mt-4"></hr>
            <span className={`${subtitle()} mt-4`}>
              We specialize in German makes but we can fix anything
            </span>
            <Button
              className={`${buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })} mb-4`}
            >
              REQUEST APPOINTMENT
            </Button>
            <p className="text-center">
              German Motors serving Las Vegas, NV is your top choice for BMW
              diagnostics, and Mercedes-Benz diagnostics, plus much more. Give
              us a call today, or schedule an appointment online to find out why
              motorists in Las Vegas prefer to do business with us!
            </p>
          </div>
          <div>
            <Image
              src="/911.jpg"
              width={400}
              height={300}
              alt="Porche 911 Gunther"
              className="object-cover w-full h-60 rounded-lg mt-4"
            ></Image>
          </div>
        </div>
        <div className="text-center mt-12 bg-background">
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

      <section className="py-8 px-4 md:px-12 flex flex-col items-center">
        <span className={`${title()} mb-8`}>Services</span>
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
    </div>
  );
}
