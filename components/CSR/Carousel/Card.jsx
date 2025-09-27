"use client";
import React from "react";
import Image from "next/image";
import mockImage from "@/app/assets/mock.jpg";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const Card = ({ CardRef }) => {
  return (
    <div ref={CardRef} className="card flex-shrink-0 p-5 relative">
      <Image
        src={mockImage}
        alt="IMAGE"
        className="h-[279px] w-[355px] rounded-[50px]"
      />
      <div className="absolute right-5 bottom-3/7">
      <Button variant="secondary" className="px-3 scale-75 text-xs">
        More Info <Info />
      </Button>
      </div>
    </div>
  );
};

export default Card;
