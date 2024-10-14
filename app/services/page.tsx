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
import ReactCardFlip from "react-card-flip";
import FlipCardComponent from "@/components/FlipCardComponent";

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
          })}`}
        >
          REQUEST APPOINTMENT
        </Button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8"></div>
        <FlipCardComponent />
      </section>
    </div>
  );
};

export default Services;
