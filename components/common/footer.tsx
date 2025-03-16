import { ORIGIN_URL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-emerald-100 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-14 items-center justify-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} PDF Shorts. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
