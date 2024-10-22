import logo from "@/public/admiral-logo.png";
import Image from "next/image";
import Link from "next/link";
import NavbarLink from "./NavbarLink";

function NavbarRegular() {
  return (
    <div className="hidden md:flex md:justify-center md:items-center md:gap-16 text-white font-archivoRegular tracking-[0.5px] text-xl">
      <NavbarLink text="Sobre" href="hero" />
      <NavbarLink text="Procedimentos" href="procedures" />
      <div className="relative w-[125px] h-[185px]">
        <Link href="/">
          <Image
            src={logo}
            alt="Admiral Logo"
            layout="fill"
            objectFit="cover"
          />
        </Link>
      </div>
      <NavbarLink text="Valores" href="values" />
      <NavbarLink text="Fale conosco" href="contact" />
    </div>
  );
}
export default NavbarRegular;
