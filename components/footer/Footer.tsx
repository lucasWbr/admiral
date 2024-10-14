import Image from "next/image";
import sectionImage from "@/public/logo-footer.png";
import SectionCenter from "@/components/global/SectionCenter";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <SectionCenter classList="flex items-center font-archivoRegular justify-center w-[60vw] md:w-[85vw] mx-auto text-xs sm:text-sm md:text-lg text-nowrap gap-12 min-h-[20vh]">
        <h1>© Admiral Assets Capital {year}</h1>
        <div className="w-[30px] h-[41px] min-w-[30px] min-h-[41px] md:w-[74px] md:h-[98px]">
          <Image src={sectionImage} alt="Admiral Assets Capital" />
        </div>
        <h1>Todos os direitos reservados</h1>
      </SectionCenter>
    </footer>
  );
}
export default Footer;
