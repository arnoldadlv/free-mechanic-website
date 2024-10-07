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
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <section>
          <Image
            src="/images/pink911.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="text-center items-center">
            <span className={title()}>
              SERVICING GERMAN MOTORS IN LAS VEGAS SINCE 1982
            </span>
            <span className={subtitle()}>FIX YOUR CAR TODAY</span>
          </div>
        </section>
      </div>
    </div>
  );
}
