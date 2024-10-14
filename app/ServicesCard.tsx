"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React from "react";

type ServicesCardProps = {
  title: string;
  imageURL: string;
  imgAlt: string;
  children?: React.ReactNode;
};

export default function ServicesCard({
  title,
  imageURL,
  imgAlt,
}: ServicesCardProps) {
  return (
    <Card className="py-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-large text-center">{title}</h4>
        <p>children</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={imgAlt}
          className="object-cover rounded-xl"
          src={imageURL}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
