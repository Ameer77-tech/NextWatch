import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navigation = ({ page, type }) => {
  return (
    <div className="flex justify-evenly w-full items-center text-sm text-accent">
      <div>
        {page > 1 ? (
          <Link href={`${type}?page=${page - 1}`} className="flex items-center">
            <ArrowLeft />
            <Button variant="ghost" className="cursor-pointer">
              prevPage
            </Button>
          </Link>
        ) : (
          <div className="flex items-center opacity-50 cursor-not-allowed">
            <ArrowLeft />
            <Button variant="ghost" disabled>
              prevPage
            </Button>
          </div>
        )}
      </div>
      <div>PAGE {page} Of 500</div>
      <div>
        {page < 500 ? (
          <Link href={`${type}?page=${page + 1}`} className="flex items-center">
            <Button variant="ghost" className="cursor-pointer">
              nextPage
            </Button>
            <ArrowRight />
          </Link>
        ) : (
          <div className="flex items-center opacity-50 cursor-not-allowed">
            <Button variant="ghost" disabled>
              nextPage
            </Button>
            <ArrowRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
