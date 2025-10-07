import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Back = () => {
  return (
    <Link href={`/`}>
      <Button variant="ghost" className="hidden md:block cursor-pointer w-10 h-10">
        <ArrowLeft />
      </Button>
    </Link>
  );
};

export default Back;
