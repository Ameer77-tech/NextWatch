import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JetBrainsMono } from "@/public/fonts/JetBrains";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo & Branding */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <Image src="/favicon.png" alt="logo" width={50} height={50} />
            <h1 className={`text-red-600 text-2xl font-bold ${JetBrainsMono.className}`}>
              NextWatch
            </h1>
          </div>
          <p className="text-gray-500 text-sm">
            Discover movies, TV series and upcoming releases.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">Feedback</p>
          <div className="flex gap-2">
            <Input
              placeholder="Tell us Your Experience"
              className="bg-gray-900 border-gray-700 text-white"
            />
            <Button variant="default">Submit</Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">Follow us</p>
          <div className="flex gap-4 text-gray-400">
            <a href="#">
              <FaTwitter size={20} />
            </a>
            <a href="#">
              <FaInstagram size={20} />
            </a>
            <a href="#">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs text-gray-600">
        <p>© 2025 NextWatch. All rights reserved.</p>
        <p className="mt-1">
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
