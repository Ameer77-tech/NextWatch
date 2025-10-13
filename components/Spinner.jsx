import React from "react";
import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default Spinner;
