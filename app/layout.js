import { poppins } from "@/public/fonts/Poppins";
import { metaData } from "./lib/MetaData";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = metaData;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
