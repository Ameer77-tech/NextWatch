import { poppins } from "@/public/fonts/Poppins";
import { metaData } from "./lib/MetaData";
import "./globals.css";
import NavBarClient from "@/components/NavBarClient";
import { Suspense } from "react";

export const metadata = metaData;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Suspense fallback={<>.....</>}>
          <NavBarClient />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
