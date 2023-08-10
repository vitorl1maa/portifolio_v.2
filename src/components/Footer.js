import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="h-full pt-96 bg-hero-pattern-end bg-no-repeat bg-center bg-cover">
      <div className="text-white bg-zinc-800/30 py-5 flex justify-between items-center container_layout">
        <span>&copy; 2023 Vitor Lima</span>
        <ul className="flex gap-3">
          <Link
            href="https://www.linkedin.com/in/vitor-lima-591aa4146/"
            target="_blank"
          >
            <li className="bg-darkPurble p-2 rounded-full text-white cursor-pointer">
              <LinkedinLogo size={25} />{" "}
            </li>
          </Link>
          <Link href="https://github.com/vitorl1maa" target="_blank">
            <li className="bg-darkPurble p-2 rounded-full text-white cursor-pointer">
              <GithubLogo size={25} />
            </li>
          </Link>
          <Link href="https://www.instagram.com/v_nasc.000x/" target="_blank">
            <li className="bg-darkPurble p-2 rounded-full text-white cursor-pointer">
              <InstagramLogo size={25} />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
