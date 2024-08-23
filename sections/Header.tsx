import LogoIcon from "../assets/logo.svg";
import MenuIcon from "../assets/icon-menu.svg";
import Link from "next/link";
import Button from "../components/Button";
import { navLinks } from "../constants";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="relative flex justify-between items-center border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur md:border">
        <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border size-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="size-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.label}
                  href="#"
                  className="text-white/70 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join Waitlist</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};