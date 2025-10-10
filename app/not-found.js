import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-lg mt-4 text-muted-foreground">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-all">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
