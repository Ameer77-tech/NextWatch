import { JetBrainsMono } from "@/public/fonts/JetBrains";
import { SpaceMono } from "@/public/fonts/Space";
import { metaData } from "./lib/MetaData";
import "./globals.css";

export const metadata = metaData

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${JetBrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
