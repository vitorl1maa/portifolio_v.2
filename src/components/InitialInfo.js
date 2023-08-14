import { LinkedinLogo, GithubLogo, X, List } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const InitialInfo = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="lg:h-screen container_layout bg-hero-pattern bg-no-repeat bg-left bg-contain bg-opacity-5 py-3">
      <div className="flex  justify-between py-5  lg:px-0 text-white items-center">
        <span href="#" className="flex items-center gap-1 lg:mb-0">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </span>
        <nav>
          <ul className="flex gap-4 lg:gap-14 menu" ref={navRef}>
            <li className="nav-links text-2xl lg:text-base">
              <Link href="#home" onClick={showNavbar}>
                Home
              </Link>
            </li>
            <li
              className="nav-links text-2xl lg:text-base"
              onClick={showNavbar}
            >
              <Link href="#about">Sobre</Link>
            </li>
            <li
              className="nav-links text-2xl lg:text-base"
              onClick={showNavbar}
            >
              <Link href="#projects">Projetos</Link>
            </li>
            <button className="nav-close-btn">
              <X size={32} color="#E76F64" onClick={showNavbar} />
            </button>
          </ul>
        </nav>
        <button className="nav-btn nav-open-btn" onClick={showNavbar}>
          <List size={32} color="#E76F64" />
        </button>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly container mx-auto pt-10 text-white">
        <div className="w-full lg:w-4/5  items-center ">
          <h1 className="text-3xl text-center lg:text-left lg:text-5xl font-extrabold leading-tight">
            Olá, meu nome é Vitor eu sou Desenvolvedor{" "}
            <span className="text-secundary">Front-end</span>.
          </h1>
          <p className="w-full text-center lg:text-left py-5 text-2xl lg:w-4/5 ">
            Sou um Desenvolvedor que transforma conceitos criativos e
            minimalistas em experiências digitais.
          </p>
        </div>

        <div className="rounded-full bg-none lg:bg-hero-pattern-profile lg:bg-no-repeat lg:bg-center lg:bg-contain0 p-12">
          <Image
            src="/profile.jpeg"
            width={400}
            height={400}
            className="rounded-full"
            alt="profile"
          />
        </div>
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
