import SectionCenter from "../global/SectionCenter";
import Image from "next/image";
import sectionImage from "@/public/procedures-image.png";

function ProceduresSection() {
  return (
    <section id="procedures">
      <div className="relative">
        <div className="bg-greenDark w-[2px] absolute h-full left-8 md:left-16"></div>
        <SectionCenter classList="w-[60vw] mx-auto pt-20">
          <div className="relative w-full h-[208px] md:w-[50vw] md:h-[50vh] md:max-w-[694px] md:max-h-[445px]">
            <Image
              src={sectionImage}
              alt="Procedimentos"
              fill
              objectFit="cover"
              className="rounded-xl filter grayscale border-[1px] border-greenDark md:rounded-[2rem]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-greenDark bg-opacity-40 flex items-center justify-center rounded-xl md:rounded-[2rem]"></div>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-gloock text-greenDark text-[2rem] sm:text-[2.5rem] pt-8 pb-4 md:pb-8 md:text-5xl">
              Procedimentos
            </h2>
            <p className="font-archivoRegular text-greenDark  text-sm pb-12 w-[55vw] md:text-base md:text-justify">
              Prestamos serviços de consultoria para blindagem patrimonial
              levando em conta as características e necessidades de cada cliente
              ou grupo familiar. Cada profissional da nossa equipe tem{" "}
              <span className="font-archivoBold">
                grande experiência e conhecimento de sua área
              </span>
              , começando com a escolha do local mais indicado para sua
              offshore, seguindo com serviços jurídicos, contábeis e de controle
              que dão segurança e agilidade para que você possa administrar seu
              patrimônio do modo mais conveniente.
            </p>
          </div>
        </SectionCenter>
        <div className="bg-greenLight h-[30px] md:h-[40px] w-full"></div>
      </div>
    </section>
  );
}
export default ProceduresSection;
