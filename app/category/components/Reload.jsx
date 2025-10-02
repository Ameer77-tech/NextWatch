"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const Reload = () => {
  return (
    <Button variant="destructive" onClick={() => window.location.reload()}>
      RELOAD PAGE
    </Button>
  );
};

export default Reload;
