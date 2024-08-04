"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { NAV_LINKS } from "./constants";

const Navbar = () => {
  const [menu,setMenu]=useState(false);
  const toggleMenu=()=>{
    setMenu(!menu)
  }

  return (
    <nav>
    <div className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/mountaineer.png" alt="logo" width={49} height={49}></Image>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.key}
              className="regular-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              {link.label}
            </Link>
          );
        })}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button title="login" type="button" icon="/user.svg" variant="btn_dark_green"></Button>
      </div>
      <Image src="menu.svg" alt="menu" width={32} height={32} className={`menu-icon inline-block cursor-pointer lg:hidden ${menu?"open":"close"}`} onClick={toggleMenu}></Image>
      
    </div>
    {menu && (<div className="flexCenter border-b-2 gap-2">
      <ul>
        {NAV_LINKS.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.key}
              className="decoration-sky-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              <strong>{link.label}</strong>
            </Link>
          );
        })}
      </ul>
      </div>)}
    </nav>
  );
};

export default Navbar;
