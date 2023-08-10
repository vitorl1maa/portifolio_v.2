import { Icon } from "@iconify/react";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="h-screen container_layout pt-40 text-white">
      <h3 className="text-3xl py-5">Projetos</h3>

      <p className="pb-20 text-lg">
        Abaixo estão alguns dos meus projetos profissionais e pessoais
      </p>

      <div className="flex flex-col gap-10">
        <div className="flex gap-5 h-full">
          <div className="card_project card_effect">
            <div>
              <Image
                src="/we_stand.png"
                width={500}
                height={100}
                className="rounded-t-md"
              />
            </div>
            <div className="pt-5 px-3 flex justify-between">
              <div>
                <h3 className="text-xl">We Stand</h3>
                <p>Site</p>
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="logos:react" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:javascript" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:styledcomponents" />
                </span>
              </div>
            </div>
          </div>

          <div className="card_project card_effect">
            <div>
              <Image
                src="/we_stand_lp.png"
                width={500}
                height={100}
                className="rounded-t-md"
              />
            </div>
            <div className="pt-5 px-3 flex justify-between">
              <div>
                <h3 className="text-xl">We Stand</h3>
                <p>Landing Page</p>
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:nextjs-dark" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:javascript" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:styledcomponents" />
                </span>
              </div>
            </div>
          </div>

          <div className="card_project card_effect">
            <div>
              <Image
                src="/picked_today.png"
                width={500}
                height={100}
                className="rounded-t-md"
              />
            </div>
            <div className="pt-5 px-3 flex justify-between">
              <div>
                <h3 className="text-xl">Picked Today</h3>
                <p>Blog</p>
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="logos:react" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:javascript" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="logos:firebase" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 h-full">
          <div className="card_project card_effect">
            <div>
              <Image
                src="/index_movies.png"
                width={500}
                height={100}
                className="rounded-t-md"
              />
            </div>
            <div className="pt-5 px-3 flex justify-between">
              <div>
                <h3 className="text-xl">Index Movies</h3>
                <p>Site</p>
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="logos:react" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:javascript" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:css" />
                </span>
              </div>
            </div>
          </div>

          <div className="card_project card_effect">
            <div>
              <Image
                src="/walk_concept.png"
                width={500}
                height={100}
                className="rounded-t-md"
              />
            </div>
            <div className="pt-5 px-3 flex justify-between">
              <div>
                <h3 className="text-xl">Walk Concept</h3>
                <p>Site</p>
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="logos:react" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:javascript" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:bootstrap" />
                </span>
              </div>
            </div>
          </div>

          <div className="card_project card_effect">
            <div>
              <Image
                src="/bti_lp.png"
                width={500}
                height={100}
                className="rounded-t-md"
              />
            </div>
            <div className="pt-5 px-3 flex justify-between">
              <div>
                <h3 className="text-xl">Bti Seguros</h3>
                <p>Landing Page</p>
              </div>
              <div className="flex gap-2 text-2xl items-end">
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:nextjs-dark" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="skill-icons:javascript" />
                </span>
                <span className="w-11 p-2 border rounded-md border-neutral-800 bg-zinc-800/30 flex justify-center">
                  <Icon icon="logos:tailwindcss-icon" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-newOrange">
          <Link href="https://vercel.com/dashboard" target="_blank">
            <span className="text-xl cursor-pointer hover:font-bold">
              Mais projetos
            </span>
          </Link>
          <ArrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
