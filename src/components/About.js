import { Check, ReadCvLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div id="about" className="h-full container_layout">
      <div className="text-white w-full pb-14 h-1/2">
        <h3 className="text-3xl py-5 text-center lg:text-left">Sobre mim</h3>
        <p className="text-lg text-justify">
          Olá! Sou um desenvolvedor Front-End apaixonado por programação. Com
          habilidades em <span className="text-secundary">React.JS</span>,{" "}
          <span className="text-secundary">Vue.js</span>,
          <span className="text-secundary">TypeScript</span> e{" "}
          <span className="text-secundary">JavaScript</span>. Minha jornada no
          mundo do desenvolvimento tem sido marcada por um compromisso contínuo
          com a inovação e a aprendizagem. A cada projeto, procuro não apenas
          atender, mas superar as expectativas, entregando funcionalidades
          robustas, designs intuitivos e um desempenho otimizado. A integração
          entre a técnica apurada e a criatividade tem sido a chave para criar
          aplicações que verdadeiramente impactam e agregam valor. Trabalhar em
          equipe, compartilhar conhecimentos e aprender com os colegas são
          aspectos que valorizo profundamente. Acredito que, em um mundo digital
          em constante evolução, a adaptação e a capacidade de manter-se
          atualizado são cruciais.
        </p>
      </div>
    </div>
  );
}

export default About;
