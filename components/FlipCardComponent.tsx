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
    <section className="py-4 mx-auto sm:py-4">
      <div className="mx-auto flex justify-center object-center">
        <div className="flex justify-center object-center flex-col gap-4 sm:gap-0">
          <div className="grid justify-center items-center gap-4 sm:gap-0 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="group h-96 w-96 mx-auto">
                <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="">
                    {service.imageUrl && (
                      <Card className="">
                        <CardHeader className="flex-col items-center text-center">
                          <span className="text-2xl">{service.name}</span>
                        </CardHeader>
                        <CardBody className="overflow-vislbe py-2">
                          <Image
                            alt="test"
                            className="object-cover cursor-pointer h-64 w-full object-center rounded-xl"
                            src={service.imageUrl}
                            width={270}
                            height={250}
                          />
                        </CardBody>
                      </Card>
                    )}
                  </div>

                  {/* Back Face */}

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-2 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">
                        {service.name}
                      </h2>

                      <p className="text-lg text-pretty text-center mb-4">
                        {service.description}
                      </p>

                      <a href="tel:555-555-5555" className="inline-flex">
                        <Button
                          className={`${buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                          })} mt-4`}
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
      </div>
    </section>
  );
};

export default FlipCardComponent;
