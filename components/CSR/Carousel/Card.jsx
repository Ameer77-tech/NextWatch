"use client";
import React from "react";
import Image from "next/image";
import mockImage from "@/app/assets/mock.jpg";
const Card = () => {
  return (
    <div className="card min-w-screen p-5">
      <Image
        src={mockImage}
        alt="IMAGE"
        className="h-[279px] w-[355px] rounded-[50px]"
      />
    </div>
  );
};

export default Card;
