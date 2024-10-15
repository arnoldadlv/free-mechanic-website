"use client";
import React from "react";
import { button, button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";

import Image from "next/image";
import { Button, Card } from "@nextui-org/react";
import { CardHeader } from "@nextui-org/react";
import { CardBody } from "@nextui-org/react";

const services = [
  {
    step: "01",
    name: "Cooling System",
    imageUrl: "/images/coolingsystem.jpg",
    description:
      "State-of-the-art diagnostics to accurately identify vehicle issues.",
  },

  {
    step: "02",
    name: "Steering & Suspension",
    imageUrl: "/images/suspension.jpg",
    description:
      "Engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.",
  },

  {
    step: "03",
    name: "A/C Repair",
    imageUrl: "/images/acrepair.jpg",
    description:
      "Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
  },
  {
    step: "04",
    name: "BMW Drivetrains",
    imageUrl: "/images/bmwdrivetrain.jpg",
    description:
      "Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
  },
  {
    step: "05",
    name: "Mufflers/Exhaust",
    imageUrl: "/images/muffler.jpg",
    description:
      "Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
  },
  {
    step: "06",
    name: "Serpentine,Driving & Timing Belts",
    imageUrl: "/images/belts.png",
    description:
      "Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
  },
];

const FlipCardComponent = () => {
  return (
    <section className="py-4 mx-10 sm:py-4">
      <div className="mx-auto justify-center object-center">
        <div className="grid justify-center gap-8 items-center md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="group mx-auto h-full w-full">
              <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div
                  className="inset-0 [backface-visibility:hidden]"
                  style={{ WebkitTransform: "rotateY(0deg)" }}
                >
                  <Card className="py-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col justify-center ">
                      <h4 className="font-bold text-large">{service.name}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl w-full h-64"
                        src={service.imageUrl}
                        width={270}
                        height={270}
                      />
                    </CardBody>
                  </Card>
                </div>
                {/* Back Face */}

                <div className="absolute h-full w-full inset-0 rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white dark:bg-[hsl(240,5.88%,10%)]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <span className={`${title({ size: "sm" })} px-2`}>
                      {service.name}
                    </span>

                    <p className="text-lg text-pretty text-center mt-4 px-4">
                      {service.description}
                    </p>

                    <a href="tel:555-555-5555" className="inline-flex">
                      <Button
                        className={`${buttonStyles({
                          color: "primary",
                          radius: "full",
                          variant: "shadow",
                        })} mt-8`}
                      >
                        REQUEST APPOINTMENT
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCardComponent;
