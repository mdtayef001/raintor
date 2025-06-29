"use client";

import Link from "next/link";

import ThemeToggleBtn from "./ThemeToogleBtn";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="container mx-auto py-6 px-9 rounded-bl-4xl rounded-br-4xl  dark:bg-transparent backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="flex items-center justify-between py-4">
        {/* logo */}
        <div>
          <Link href="/" className="uppercase font-black text-4xl">
            devlop.me
          </Link>
        </div>
        <div className="flex items-center gap-16">
          {/* links */}
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-9 cursor-pointer">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* button */}
          <div className="flex items-center gap-4">
            <ThemeToggleBtn />
            <Button />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
