"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

type ImgCardProps = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  imgCaption: string;
};

export default function ImgCard({
  title,
  imgSrc,
  imgAlt,
  imgCaption,
}: ImgCardProps) {
  return (
    <Card className="py-0">
      <CardHeader className="pb-0 pt-2 px-4 flex justify-center items-center">
        <h4 className="font-bold text-large text-center">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-1">
        <div className="flex justify-center">
          <Image
            alt={imgAlt}
            className="object-cover rounded-xl"
            src={imgSrc}
            width={270}
            height={200}
          />
        </div>
        <span className="text-medium text-center mt-4 mb-4">{imgCaption}</span>
      </CardBody>
    </Card>
  );
}
