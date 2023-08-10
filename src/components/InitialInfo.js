import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InitialInfo = () => {
  return (
    <div className="h-screen container_layout bg-hero-pattern bg-no-repeat bg-left bg-contain bg-opacity-5 py-3">
      <div className="flex justify-between py-5 text-white items-center">
        <span href="#" class="logo" className="flex items-center gap-1">
          <Image src="/logo.png" width={50} height={50} />
        </span>
        <nav>
          <button
            aria-label="Abrir Menu"
            id="menu-icon"
            aria-haspopup="true"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <span id="hamburger-icon"></span>
          </button>

          <ul className="flex gap-14" role="menu">
            <li className="nav-links">
              <Link href="#home">Home</Link>
            </li>
            <li className="nav-links">
              <Link href="#about">Sobre</Link>
            </li>
            <li className="nav-links">
              <Link href="#projects">Projetos</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full flex justify-evenly container mx-auto pt-10 text-white items-center">
        <div className="w-4/5">
          <h1 className="text-5xl font-extrabold leading-tight">
            Olá, meu nome é Vitor eu sou Desenvolvedor{" "}
            <span className="text-secundary">Front-End</span>.
          </h1>
          <p className="w-4/5 py-5 text-2xl">
            Sou um Desenvolvedor Front-End apaixonado por transformar conceitos
            criativos e minimalistas em experiências digitais.
          </p>
        </div>

        <span>
          <Image
            src="/geek.png"
            width={400}
            height={400}
            className="rounded-full"
          />
        </span>
      </div>

      <div className="flex gap-5">
        <Link
          href="https://www.linkedin.com/in/vitor-lima-591aa4146/"
          target="_blank"
        >
          <button className="button_default w-40 text-white flex gap-1 hover:border-secundary transition-all hover:translate-y-2">
            <LinkedinLogo size={25} />
            LinkedIn
          </button>
        </Link>
        <Link href="https://github.com/vitorl1maa" target="_blank">
          <button className="button_default w-40 text-white flex gap-1 items-center justify-center hover:border-secundary transition-all hover:translate-y-2">
            <GithubLogo size={25} />
            Github
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InitialInfo;
