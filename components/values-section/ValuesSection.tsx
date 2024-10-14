import SectionCenter from "../global/SectionCenter";
import Image from "next/image";
import sectionImage from "@/public/values-image.png";

function ValuesSection() {
  return (
    <section className="bg-greenDark relative" id="values">
      <div className="bg-greenLight w-[2px] absolute h-full left-8 md:left-16"></div>
      <SectionCenter classList="w-[55vw] mx-auto pt-16 pb-20 md:grid md:grid-cols-2 md:gap-8 md:pt-32">
        <div className="max-w-[30vw] md:flex md:flex-col md:justify-end pb-8 md:pb-0 md:pl-2">
          <h1 className="text-greenLight font-gloock text-[2.5rem] pt-8 pb-4 md:pb-8 md:text-5xl">
            Valores
          </h1>
          <p className="font-archivoRegular text-white  text-sm w-[55vw] md:text-lg md:max-w-[20vw]">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.{" "}
            <span className="text-greenLight font-archivoBold">
              Praesent auctor purus luctus
            </span>{" "}
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum{" "}
            <span className="text-greenLight font-archivoBold">
              tellus elit sed risus
            </span>
            . Maecenas eget condimentum velit
          </p>
        </div>
        <div className="w-full h-[235px] relative border-[2px] border-greenLight rounded-[2rem] md:h-[70vh] md:max-h-[680px] md:max-w-[533px]">
          <Image
            src={sectionImage}
            alt="Valores"
            fill
            objectFit="cover"
            className="rounded-[2rem] filter grayscale"
          />
        </div>
      </SectionCenter>
    </section>
  );
}
export default ValuesSection;
