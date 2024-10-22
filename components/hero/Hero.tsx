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
              Em um mundo cada vez mais superficial é importante poder contar e
              confiar com quem preza por qualidade de serviço, zelo
              profissional, confiabilidade e sigilo. Para nós, excelência é
              trabalhar pensando sempre nos{" "}
              <span className="font-archivoBold text-greenLight">
                melhores resultados para o cliente
              </span>
              .
            </p>
            <p className="md:hidden font-archivoRegular text-white text-sm pb-16">
              Excelência é nunca dar o serviço como pronto antes de confirmar de
              que tudo o que precisava ser feito foi feito da melhor forma
              possível para os melhores resultados.
            </p>
            <p className="hidden md:inline font-archivoRegular text-white pb-20 text-lg text-justify">
              Em um mundo cada vez mais superficial é importante poder contar e
              confiar com quem preza por qualidade de serviço, zelo
              profissional, confiabilidade e sigilo. Para nós, excelência é
              trabalhar pensando sempre nos{" "}
              <span className="font-archivoBold text-greenLight">
                melhores resultados para o cliente
              </span>
              . Excelência é nunca dar o serviço como pronto antes de confirmar
              de que tudo o que precisava ser feito foi feito da melhor forma
              possível para os melhores resultados.
            </p>
          </div>
        </SectionCenter>
      </div>
    </section>
  );
}
export default Hero;
