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
          Sou um desenvolvedor de software dedicado, com experiência consolidada
          em linguagens e frameworks como{" "}
          <span className="text-secundary font-extrabold">JavaScript,</span>
          <span className="text-secundary font-extrabold"> TypeScript,</span>
          <span className="text-secundary font-extrabold"> React,</span>{" "}
          <span className="text-secundary font-extrabold"> Angular</span> e
          <span className="text-secundary font-extrabold"> React Native</span>.
          Minha trajetória profissional é marcada por um compromisso constante
          com a inovação, a excelência técnica e o aprendizado contínuo. Tenho
          como objetivo ir além das expectativas nos projetos em que atuo,
          entregando soluções tecnológicas confiáveis, interfaces amigáveis e
          desempenho eficiente. Busco unir precisão técnica e criatividade para
          desenvolver aplicações que realmente impactem e tragam valor aos
          usuário. Dou grande importância ao trabalho em equipe, à troca de
          conhecimento e ao aprendizado mútuo. Em um setor dinâmico como o da
          tecnologia, considero essencial manter-se atualizado e adaptar-se
          constantemente, contribuindo para o desenvolvimento de soluções
          digitais mais eficientes e inovadoras.
        </p>
        <h3 className="text-3xl pt-10 text-center lg:text-left">
          Algumas tecnologias que eu trabalho:
        </h3>
        <div className="flex justify-between  items-center pt-5 flex-wrap">
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:javascript" className="text-[3rem] " />
            </span>
            <p>JavaScipt</p>
          </div>

          <div className="flex items-center flex-col gap-2 py-4 md:py-0">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:typescript" className="text-[3rem] " />
            </span>
            <p>TypeScript</p>
          </div>

          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:react-dark" className="text-[3rem] " />
            </span>
            <p>React</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon
                className="text-[2.5rem] text-[#087EA4] "
                icon="logos:react"
              />
            </span>
            <p>React Native</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="logos:angular-icon" className="text-[3rem] " />
            </span>
            <p>Angular</p>
          </div>
          <div className="flex items-center flex-col gap-2 md:py-4 py-0">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:nextjs-dark" className="text-[3rem] " />
            </span>
            <p>Next</p>
          </div>
          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="skill-icons:nodejs-dark" className="text-[3rem] " />
            </span>
            <p>Node.js</p>
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
              <Icon
                icon="vscode-icons:file-type-firebase"
                className="text-[3rem] "
              />
            </span>
            <p>Firebase</p>
          </div>
          <div className="flex items-center flex-col gap-2 py-4 md:py-0">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon icon="logos:tailwindcss-icon" className="text-[3rem] " />
            </span>
            <p>Tailwind</p>
          </div>

          <div className="flex items-center flex-col gap-2">
            <span className=" w-20 h-20 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center items-center">
              <Icon
                icon="skill-icons:styledcomponents"
                className="text-[3rem] "
              />
            </span>
            <p>Styled Co...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
