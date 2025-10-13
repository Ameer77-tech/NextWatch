import { JetBrainsMono } from "@/public/fonts/JetBrains";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Submit from "./Submit";

const Footer = () => {
  return (
    <footer className="bg-background/50 text-gray-400 py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Image src="/favicon.png" alt="logo" width={40} height={40} />
            <h1
              className={`text-red-600 text-2xl font-bold ${JetBrainsMono.className}`}
            >
              NextWatch
            </h1>
          </div>
          <p className="text-gray-500 text-sm">
            Discover movies, TV series and upcoming releases.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">Feedback</p>
          <Submit />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">Socials</p>
          <div className="flex gap-4 text-gray-400">
            <a
              href="https://www.linkedin.com/in/ameer-shaik-55b106364"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/Ameer77-tech" target="_blank">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-600">
        <p>© 2025 NextWatch. All rights reserved.</p>
        <p className="mt-1">
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
        <p className="mt-1">DEVELOPED BY @AMEER_SHAIK</p>
      </div>
    </footer>
  );
};

export default Footer;
