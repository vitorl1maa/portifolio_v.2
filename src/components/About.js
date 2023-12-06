import { Check, ReadCvLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

function About() {
  return (
    <div id="about" className="h-full container_layout">
      <div className="text-white w-full pb-14 h-1/2">
        <h3 className="text-3xl py-5 text-center lg:text-left">Sobre mim</h3>
        <p className="text-lg text-justify">
          Olá! Sou um desenvolvedor de software apaixonado por programação. Com
          habilidades em{" "}
          <span className="text-secundary font-extrabold">JavaScript</span>,{" "}
          <span className="text-secundary font-extrabold">React</span>,
          <span className="text-secundary font-extrabold"> Java</span>,
          <span className="text-secundary font-extrabold"> Docker</span> e{" "}
          <span className="text-secundary font-extrabold">Banco de dados</span>.
          Minha jornada no mundo do desenvolvimento tem sido marcada por um
          compromisso contínuo com a inovação e a aprendizagem. A cada projeto,
          procuro não apenas atender, mas superar as expectativas, entregando
          funcionalidades robustas, designs intuitivos e um desempenho
          otimizado. A integração entre a técnica apurada e a criatividade tem
          sido a chave para criar aplicações que verdadeiramente impactam e
          agregam valor. Trabalhar em equipe, compartilhar conhecimentos e
          aprender com os colegas são aspectos que valorizo profundamente.
          Acredito que, em um mundo digital em constante evolução, a adaptação e
          a capacidade de manter-se atualizado são cruciais.
        </p>
        <h3 className="text-3xl pt-10 text-center lg:text-left">
          Algumas tecnologias que eu utilizo:
        </h3>
        <div className="flex justify-around pt-5 flex-wrap">
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:javascript" className="text-[3rem] " />
            </span>
            <p>JavaScipt</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="devicon:java-wordmark" className="text-[5rem] " />
            </span>
            <p>Java</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="logos:react" className="text-[3rem] " />
            </span>
            <p>React.JS</p>
          </div>
          <div className="flex items-center flex-col gap-2 py-4 md:py-0">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:nextjs-dark" className="text-[3rem] " />
            </span>
            <p>Next.JS</p>
          </div>
          <div className="flex items-center flex-col gap-2 py-4 md:py-0">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:typescript" className="text-[3rem] " />
            </span>
            <p>TypeScript</p>
          </div>
          <div className="flex items-center flex-col gap-2 py-4 md:py-0">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:mongodb" className="text-[3rem] " />
            </span>
            <p>Mongo DB</p>
          </div>
          <div className="flex items-center flex-col gap-2 py-4 md:py-0">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="logos:postgresql" className="text-[3rem] " />
            </span>
            <p>Postgres</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="logos:tailwindcss-icon" className="text-[3rem] " />
            </span>
            <p>Tailwind CSS</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="logos:aws" className="text-[3rem] " />
            </span>
            <p>AWS</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="devicon:sanity" className="text-[3rem] " />
            </span>
            <p>Sanity</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:docker" className="text-[3rem] " />
            </span>
            <p>Docker</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
