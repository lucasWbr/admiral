import heroImage from "@/public/hero-image.png";
import Image from "next/image";
import SectionCenter from "../global/SectionCenter";

function Hero() {
  return (
    <section className="bg-greenDark" id="hero">
      <div className="relative w-full h-[141px] md:h-[415px] border-t-[1px] border-b-[1px] border-greenLight">
        <Image
          src={heroImage}
          alt="Hero image"
          fill
          objectFit="cover"
          className="filter grayscale"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#959595] bg-opacity-5 flex items-center justify-center" />
      </div>
      <div className="relative">
        <div className="bg-greenLight w-[2px] absolute h-full left-8 md:left-16"></div>
        <SectionCenter classList="relative md:w-[85vw] mx-auto">
          <div className="flex flex-col w-[55vw] mx-auto">
            <h1 className="font-gloock text-greenLight text-4xl pt-8 pb-4 md:pb-1 md:text-5xl md:mx-auto">
              Excelência
            </h1>
            <h2 className="hidden md:flex font-archivoItalic text-white md:mx-auto pb-12 text-xl">
              O norte da admiral
            </h2>
            <p className="md:hidden  font-archivoRegular text-white text-sm pb-4">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.{" "}
              <span className="font-archivoBold text-greenLight">
                Sed dignissim, metus nec fringilla
              </span>{" "}
              accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
              sed risus. Maecenas eget condimentum velit, sit amet feugiat
              lectus.
            </p>
            <p className="md:hidden font-archivoRegular text-white text-sm pb-16">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.{" "}
              <span className="font-archivoBold text-greenLight">
                Praesent auctor purus luctus enim egestas
              </span>
              , risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              Maecenas eget condimentum velit, sit amet feugiat lectus.
            </p>
            <p className="hidden md:inline font-archivoRegular text-white pb-20 text-lg">
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.{" "}
              <span className="font-archivoBold text-greenLight">
                Sed dignissim, metus nec fringilla
              </span>{" "}
              accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
              sed risus. Maecenas eget condimentum velit, sit amet feugiat
              lectus.
            </p>
          </div>
        </SectionCenter>
      </div>
    </section>
  );
}
export default Hero;
