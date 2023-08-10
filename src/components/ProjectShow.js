import { Icon } from "@iconify/react";
import { ArrowLeft, GitBranch, LinkSimple } from "@phosphor-icons/react";
import React from "react";

const ProjectShow = () => {
  return (
    <div className="container_layout flex justify-center  items-center">
      <div className="w-4/5 relative">
        <span className="absolute text-newOrange -top-10 font-bold cursor-pointer flex items-center gap-1 hover:font-bold">
          <ArrowLeft size={32} />
          Voltar
        </span>
        <h1 className="text-white text-4xl text-center py-5">We Stand</h1>

        <p className="text-xl text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          accusamus est voluptatibus explicabo, blanditiis quibusdam in.
          Perferendis voluptas corrupti voluptatem cum repellendus consequatur
          officia, molestias architecto sapiente? Ex, mollitia neque!
        </p>

        <div className="flex justify-between items-center py-20">
          <div className="py-5 flex gap-5">
            <button className="button_default w-44 text-white flex gap-1 items-center justify-center hover:border-secundary transition-all hover:translate-y-2">
              <LinkSimple size={25} />
              Vizualizar
            </button>
            <button className="button_default w-44 text-white flex gap-1 items-center justify-center hover:border-secundary transition-all hover:translate-y-2">
              <GitBranch size={25} />
              Répositorio
            </button>
          </div>

          <div>
            <h3 className="text-xl text-white pb-5">
              Algumas das stacks que utilizei nesse projeto:
            </h3>
            <div className="flex gap-5">
              <div className="w-25 text-center flex justify-center flex-col items-center">
                <span className="w-20 py-3 px-3 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="logos:react" className="text-5xl" />
                </span>
              </div>

              <div className="w-25 text-center flex justify-center flex-col items-center">
                <span className="w-20 py-3 px-3 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:javascript" className="text-5xl" />
                </span>
              </div>

              <div className="w-25 text-center flex justify-center flex-col items-center">
                <span className="w-20 py-3 px-3 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon
                    icon="skill-icons:styledcomponents"
                    className="text-5xl"
                  />
                </span>
              </div>

              <div className="w-25 text-center flex justify-center flex-col items-center">
                <span className="w-20 py-3 px-3 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon
                    icon="skill-icons:materialui-dark"
                    className="text-5xl"
                  />
                </span>
              </div>
            </div>
            <div className="py-5 text-xl text-white">
              <span>React, JavaScript, Styled Components e Material UI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
