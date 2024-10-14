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
            <p className="font-archivoRegular text-greenDark  text-sm pb-12 w-[55vw] md:text-base">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
              egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
              Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
              bibendum lorem.{" "}
              <span className="font-archivoBold">
                Morbi convallis convallis diam
              </span>{" "}
              sit amet lacinia. Aliquam in elementum tellus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.{" "}
              <span className="md:font-archivoBold">Praesent auctor</span> purus
              luctus enim egestas, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>
          </div>
        </SectionCenter>
        <div className="bg-greenLight h-[30px] md:h-[40px] w-full"></div>
      </div>
    </section>
  );
}
export default ProceduresSection;
