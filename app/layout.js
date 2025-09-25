import { poppins } from "@/public/fonts/Poppins";
import { metaData } from "./lib/MetaData";
import "./globals.css";

export const metadata = metaData;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
