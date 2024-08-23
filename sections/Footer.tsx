import Link from "next/link";
import Logo from "../assets/logo.svg";
import { footerLinks } from "../constants";
import XSocial from "../assets/social-x.svg";
import InstaSocial from "../assets/social-instagram.svg";
import YTSocial from "../assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="flex gap-2 items-center">
            <Logo className="size-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <nav className="flex flex-col items-center gap-5 lg:flex-row lg:gap-7">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white text-xs transition md:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};