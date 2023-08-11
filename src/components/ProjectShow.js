import { Icon } from "@iconify/react";
import { ArrowLeft, GitBranch, LinkSimple } from "@phosphor-icons/react";
import React from "react";
import data from "@/mocks/data";
import Link from "next/link";

const ProjectShow = ({
  id,
  title,
  description,
  links,
  icons,
  stacks,
  onBackClick,
}) => {
  return (
    <div className="container_layout flex justify-center pt-40 items-center">
      <div className="w-4/5 relative">
        <span
          className="absolute text-newOrange -top-10 cursor-pointer flex items-center gap-1 hover:font-bold"
          onClick={() => onBackClick()}
        >
          <ArrowLeft size={32} />
          Voltar
        </span>
        <h1 className="text-white text-4xl text-center py-5">{title}</h1>

        <p className="text-xl text-justify">{description}</p>

        <div className="flex flex-col  lg:flex-row justify-between items-center py-20">
          <div className="py-5 flex flex-col lg:flex-row lg:flex-wrap gap-5 pb-10">
            {links.map((link, index) => (
              <div key={index}>
                <Link href={link} target="_blank">
                  <button className="button_default w-80 lg:w-44 text-white flex gap-1 items-center justify-center hover:border-secundary transition-all hover:translate-y-2">
                    {index === 0 ? (
                      <>
                        <LinkSimple size={25} />
                        Vizualizar
                      </>
                    ) : (
                      <>
                        <GitBranch size={25} />
                        Repositório
                      </>
                    )}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl text-center lg:text-left text-white pb-5">
              Algumas das stacks que foram utilizadas nesse projeto:
            </h3>
            <div className="flex flex-wrap gap-5">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="w-25 text-center flex justify-center flex-col items-center"
                >
                  <span className="w-20 py-3 px-3 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                    <Icon icon={icon} className="text-5xl" />
                  </span>
                </div>
              ))}
            </div>
            <div className="py-5 text-xl text-center lg:text-left text-white">
              {stacks.map((stack, index) => (
                <span key={index}>{stack}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
