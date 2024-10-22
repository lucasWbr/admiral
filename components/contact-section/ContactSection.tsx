"use client";
import SectionCenter from "../global/SectionCenter";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  text: string;
}

function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    text: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch("https://formspree.io/f/xzzbbegr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.text,
        }),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", subject: "", text: "" });
        console.log(status);
      } else {
        setStatus("Falha ao enviar a mensagem.");
        console.log(status);
      }
    } catch (error) {
      setStatus("Erro ao enviar. Tente novamente mais tarde.");
      console.log(`${status} ${error}`);
    }
  };

  return (
    <section className="pb-12" id="contact">
      <div className="relative">
        <div className="bg-greenDark w-[2px] absolute h-1/2 left-8 md:left-16"></div>
        <div className="w-[60vw] md:w-[70vw] absolute h-[47%] top-1/2 left-8 md:left-16 border-b-[2px] border-l-[2px] rounded-bl-[4rem] border-greenDark z-[-2]"></div>
        <div className="bg-greenLight h-[30px] md:h-[40px] w-full"></div>
        <SectionCenter classList="w-[60vw] mx-auto pt-20">
          <h1 className="font-gloock text-greenDark text-[2.5rem] pt-8 pb-4 md:pb-8 md:text-5xl">
            Fale Conosco
          </h1>
          <p className="font-archivoRegular text-greenDark  text-sm pb-12 w-[55vw] md:text-base md:text-justify">
            Entre em contato para agendar uma reunião de trabalho inicial para
            conhecermos seus desejos e necessidades e a partir daí
            apresentaremos nossas sugestões e poderemos elaborar conjuntamente
            um plano de trabalho ágil e seguro para proteção e/ou sucessão
            patrimonial eficiente.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="bg-greenLight flex flex-col border-[2px] border-greenDark rounded-xl">
              <div className="grid grid-cols-2 md:grid-cols-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nome Completo"
                  required
                  className="bg-transparent border-r-[2px] border-b-[2px] border-greenDark p-2 rounded-tl-xl font-archivoRegular text-greenDark placeholder-greenDark focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@email.com"
                  required
                  className="bg-transparent border-b-[2px] border-greenDark p-2 font-archivoRegular text-greenDark placeholder-greenDark focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto"
                  required
                  className="bg-transparent col-span-2 md:col-span-1 md:border-l-[2px] border-b-[2px] border-greenDark p-2 rounded-tr-xl font-archivoRegular text-greenDark placeholder-greenDark focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  name="text"
                  id="textArea"
                  value={formData.text}
                  onChange={handleChange}
                  className="bg-transparent w-full pl-2 font-archivoRegular text-greenDark placeholder-greenDark min-h-[20vh] focus:outline-none resize-none"
                  required
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
            </div>
            <button
              className="py-2 px-10 bg-greenLight rounded-xl mt-8 text-greenDark font-archivoRegular border-[2px] border-greenDark w-32 place-self-end"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </SectionCenter>
      </div>
    </section>
  );
}
export default ContactSection;
