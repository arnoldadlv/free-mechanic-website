import React from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button, button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import ImgCard from "../ImgCard";

const Services = () => {
  return (
    <div>
      <section className="py-8 px-4 md:px-12 flex flex-col items-center text-center">
        <span className={`${title()} mb-4`}>Services</span>
        <span className={`${subtitle()} mb-4`}>
          We provide a variety of services to keep your vehcile running like
          new. Our friendly team of talented technicains us e the latest tools
          and techniques to put you back on the road in top shape. Stop in and
          see for yourself why we are the best in Las Vegas, NV.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          <div>
            <ImgCard
              imgAlt="A/C Repair"
              imgSrc="images/acrepair.jpg"
              title="A/C Repair"
              imgCaption="Its 100 degrees and your car's A/C just gave out! What do you do? Give the professionals at BMW Only a call and their expert technicians will help to diagnose the problem and get you feeling cooler in no time.

"
            />
          </div>
          <div>
            <ImgCard
              imgAlt="BMW Drivetrains"
              imgSrc="images/bmwdrivetrain.jpg"
              title="BMW Drivetrain Repair"
              imgCaption="Whether its the clutch, drive shaft, differential, CV axels & joints, transmission or engine, our team is equipped to service drivetrains for manual transmissions, automatics, front and four-wheel drive vehicles."
            />
          </div>
          <div>
            <ImgCard
              imgAlt="Mufflers/Exhaust"
              imgSrc="images/muffler.jpg"
              title="Mufflers/Exhaust"
              imgCaption="Our muffler and exhaust pros at will ensure that your complete exhaust system is serviced and extending the life of your vehicle's engine. From O2 sensors, to catalytic converters and mufflers, we are the ones to call!"
            />
          </div>
          <div>
            <ImgCard
              imgAlt="Cooling System Repair"
              imgSrc="images/coolingsystem.jpg"
              title="Cooling System Repair"
              imgCaption="Don't blow a gasket! Radiator repair and maintenance are what the professionals at BMW Only are known for! Las Vegas's experienced technicians will help to diagnose any radiator trouble.

From a broken hose and radiator cracks, to fluid flushing and pump replacements, we do it all. To avoid costly repairs, be sure to get your radiator serviced soon!

"
            />
          </div>
          <div>
            <ImgCard
              imgAlt="Serpentine,Driving & Timing Belts"
              imgSrc="images/belts.png"
              title="Serpentine,Driving & Timing Belts"
              imgCaption="Your engine relies on both the serpentine, timing, and drive belts to run smoothly and efficiently. If one or all are out of sync, you could have major costly repairs in the future.

Avoid this headache by letting BMW Only inspect your belts before they give out. We pledge that you will receive fair and competitive prices for all belt replacements and services.

"
            />
          </div>
          <div>
            <ImgCard
              imgAlt="Steering & Suspension"
              imgSrc="images/suspension.jpg"
              title="Steering & Suspension"
              imgCaption="If you're experiencing hard turning, wandering steering, or even more bouncing than usual, rely on our experienced technicians to diagnose and get your vehicle running smoothly again.

Steering repair, car suspension, and proper wheel alignment all help keep your vehicle on the straight and narrow. You can trust us to get you back to a comfortable ride in no time.

"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
