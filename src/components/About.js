import { Check, ReadCvLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div id="about" className="h-full lg:h-screen container_layout">
      <div className="text-white w-full pb-14">
        <h3 className="text-3xl py-5 text-center lg:text-left">Sobre mim</h3>
        <p className="text-lg text-justify">
          Olá! Meu nome é Vitor e sou um desenvolvedor Front-End apaixonado por
          criar experiências digitais. Com habilidades em{" "}
          <span className="text-secundary">React.JS</span>,{" "}
          <span className="text-secundary">Next.JS</span> e{" "}
          <span className="text-secundary">JavaScript</span>, estou sempre
          procurando aprender mais e evoluir meu conhecimento. Minha paixão por
          tecnologia e programação surgiu desde cedo, e desde então tenho
          dedicado meus esforços para alcançar esse sonho. Trabalho em projetos
          pessoais e profissionais, sempre buscando maneiras de melhorar minhas
          habilidades e entregar produtos excepcionais aos usuários. Sou
          motivado por desafios e amo trabalhar em equipe para criar soluções
          inovadoras. Acredito que a colaboração e a comunicação efetiva são
          fundamentais para o sucesso de qualquer projeto. Acessando meu
          repositório no Github, é possível ver os projetos que faço para
          praticar e os projetos nos quais trabalhei.
        </p>
      </div>

      <div className="text-white flex flex-col lg:flex-row gap-10 lg:gap-72 items-center bg-hero-pattern-secundary bg-no-repeat bg-center bg-cover bg-opacity-5 py-3">
        <div className="lg:w-2/4">
          <h3 className="text-3xl py-5 text-center lg:text-left">
            Diferenciais
          </h3>
          <div className="py-3">
            <div className="flex gap-3 items-center">
              <span className="bg-secundary rounded-full w-7 h-7 p-1 lg:py-0.5 flex justify-center items-center">
                <Check size={18} color="#0f0c17" />
              </span>
              <h4 className="text-xl font-bold">
                Interfaces de alta fidelidade
              </h4>
            </div>
            <p className="py-3">
              Trabalho com a implementação fiel de interfaces pensando pela
              melhor experiência do usuário para atender as expectativas de cada
              projeto.
            </p>
          </div>

          <div className="py-3">
            <div className="flex gap-3 items-center">
              <span className="bg-secundary rounded-full w-7 h-7 p-1 lg:py-0.5 flex justify-center items-center">
                <Check size={20} color="#0f0c17" />
              </span>
              <h4 className="text-xl font-bold">Clean Code</h4>
            </div>
            <p className="py-3">
              Tenho como minha principal diretriz durante o desenvolvimento a
              qualidade do código seguindo as melhores práticas do mercado.
            </p>
          </div>

          <div className="py-3">
            <div className="flex gap-3 items-center">
              <span className="bg-secundary rounded-full w-7 h-7 p-1 lg:py-0.5 flex justify-center items-center">
                <Check size={20} color="#0f0c17" />
              </span>
              <h4 className="text-xl font-bold">Metodologias Ágeis</h4>
            </div>
            <p className="py-3">
              Em todos os projetos que desenvolvo, gosto de seguir um padrão bem
              elaborado em todas as etapas do processo. A utilização de
              metodologias de desenvolvimento como a Scrum é fundamental para
              assegurar a agilidade e eficiência no processo.
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-col gap-3 ">
          <span className="wrapper border border-neutral-800">
            <Image
              src="/image_curriculo.png"
              width={300}
              height={300}
              className="rounded-md"
            />
          </span>
          <Link
            href="/Currículo Desenvolvedor Frontend.pdf"
            target="_blank"
            download="Currículo Desenvolvedor Frontend - Vitor Lima"
          >
            <button className="w-full button_default flex gap-1 items-center hover:border-secundary transition-all hover:translate-y-2">
              <ReadCvLogo size={25} />
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
