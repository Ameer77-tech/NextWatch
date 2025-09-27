import React from "react";
import Logo from "./SSR/Logo";
import SearchIcon from "./CSR/SearchIcon";
import MenuIcon from "./CSR/MenuIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <div className="nav-end flex gap-3 items-center md:hidden lg:hidden">
        <SearchIcon />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Navbar;
