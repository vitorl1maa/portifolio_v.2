import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InitialInfo = () => {
  return (
    <div className="lg:h-screen container_layout bg-hero-pattern bg-no-repeat bg-left bg-contain bg-opacity-5 py-3">
      <div className="flex flex-col lg:flex-row justify-between py-5 text-white items-center">
        <span href="#" className="flex items-center gap-1 lg:mb-0">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
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

          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-14" role="menu">
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

      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly container mx-auto pt-10 text-white">
        <div className="w-full lg:w-4/5  items-center ">
          <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-extrabold leading-tight">
            Olá, meu nome é Vitor eu sou Desenvolvedor{" "}
            <span className="text-secundary">Front-End</span>.
          </h1>
          <p className="w-full text-center lg:text-left py-5 text-lg lg:w-4/5 lg:text-2xl">
            Sou um Desenvolvedor Front-End apaixonado por transformar conceitos
            criativos e minimalistas em experiências digitais.
          </p>
        </div>

        <span>
          <Image
            src="/profile.jpeg"
            width={400}
            height={400}
            className="rounded-full"
            alt="profile"
          />
        </span>
      </div>

      <div className="flex pt-10 justify-center lg:justify-start lg:flex-row gap-4 lg:gap-5">
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
