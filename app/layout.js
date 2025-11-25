import { poppins } from "@/public/fonts/Poppins";
import { metaData } from "./lib/MetaData";
import "./globals.css";
import NavBarClient from "@/components/NavBarClient";

export const metadata = metaData;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
          <NavBarClient /> 
        {children}
      </body>
    </html>
  );
}
