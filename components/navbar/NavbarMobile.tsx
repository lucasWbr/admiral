"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/admiral-logo.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    const navMenu = document.getElementById("navMenu");
    if (isOpen) {
      navMenu?.classList.add("hidden");
      document.body.style.overflow = "auto";
    } else {
      navMenu?.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    const navMenu = document.getElementById("navMenu");
    navMenu?.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex  pt-9 justify-center items-center md:hidden">
      <button
        onClick={handleClick}
        className="absolute left-2 flex-none h-12 w-12"
      >
        <IoMenu className="text-greenLight h-12 w-12" />
      </button>
      <div className="w-[71px] h-[105px] relative">
        <Link href="/">
          <Image src={logo} alt="Admiral" fill objectFit="cover" />
        </Link>
      </div>
      <div
        id="navMenu"
        className="hidden absolute z-10 bg-greenDark w-full h-full top-0 left-0"
      >
        <div className="flex  pt-9 justify-center items-center md:hidden">
          <button onClick={handleClick} className=" flex-none absolute left-2">
            <IoMenu className="text-greenLight h-12 w-12" />
          </button>
          <div className="w-[71px] h-[105px] relative">
            <Link href="/" onClick={handleLinkClick}>
              <Image src={logo} alt="Admiral" fill objectFit="cover" />
            </Link>
          </div>
        </div>
        <ul className="grid grid-rows-4 grid-flow-row w-ful h-[81vh]">
          <li className="font-gloock text-greenLight text-4xl border-t-[1px] border-greenLight text-center flex items-center justify-center">
            <Link href="#hero" onClick={handleLinkClick}>
              Sobre
            </Link>
          </li>
          <li className="font-gloock text-greenLight text-4xl border-t-[1px] border-greenLight text-center flex items-center justify-center">
            <Link href="#procedures" onClick={handleLinkClick}>
              Procedimentos
            </Link>
          </li>
          <li className="font-gloock text-greenLight text-4xl border-t-[1px] border-greenLight text-center flex items-center justify-center">
            <Link href="#values" onClick={handleLinkClick}>
              Valores
            </Link>
          </li>
          <li className="font-gloock text-greenLight text-4xl border-t-[1px] border-b-[1px] border-greenLight text-center flex items-center justify-center">
            <Link href="#contact" onClick={handleLinkClick}>
              Fale Conosco
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavbarMobile;
