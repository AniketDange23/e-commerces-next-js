// src/components/Navbar.js
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-white shadow-md z-50">
      <div className="flex justify-between items-center h-full md:hidden">
        {/* Mobile screen */}
        <Link href="/">
          <span className="text-2xl font-bold tracking-wide">Store</span>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screen */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-3">
          <Link href="/">
            <span className="text-2xl font-bold tracking-wide">Store</span>
          </Link>
          <div className="hidden xl:block"></div>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
