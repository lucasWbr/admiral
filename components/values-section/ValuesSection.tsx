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
          <p className="font-archivoRegular text-white  text-sm w-[55vw] md:text-lg md:max-w-[20vw] pb-8">
            Nosso trabalho é um investimento que poupará perdas irreparáveis em
            impostos, taxas e outros custos. Nossos honorários levam em conta a
            estimativa do volume e das características do trabalho necessário
            para os melhores resultados. Justo, não?
          </p>
          <p className="font-archivoRegular text-white  text-sm w-[55vw] md:text-lg md:max-w-[20vw]">
            Dentro de um cronograma debatido em conjunto, colocamos você e seu
            patrimônio{" "}
            <span className="text-greenLight font-archivoBold">
              longe dos riscos de uma economia instável e de um país cuja carga
              de impostos aumenta cada vez mais
            </span>
            . Obedecendo rigorosamente as leis do país onde está seu patrimônio
            e as leis do país no qual você quer proteger este patrimônio.
            Simples assim. Acredite, o preço desta tranquilidade é um percentual
            ínfimo do que você vai poupar.
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
