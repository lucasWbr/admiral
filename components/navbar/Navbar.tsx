import SectionCenter from "../global/SectionCenter";
import NavbarMobile from "./NavbarMobile";
import NavbarRegular from "./NavbarRegular";

function Navbar() {
  return (
    <nav className="bg-greenDark h-[142px] md:h-[186px]">
      <SectionCenter classList="mx-auto">
        <NavbarMobile />
        <NavbarRegular />
      </SectionCenter>
    </nav>
  );
}
export default Navbar;
