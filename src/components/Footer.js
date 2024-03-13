import {
  CaretUp,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <>
      <ScrollToTop
        smooth
        component={<CaretUp size={32} color={"#fff"} />}
        className="top-btn"
      />
      <div className="h-full">
        <div className="text-white bg-zinc-800/30 py-5 flex justify-between items-center container_layout mt-20">
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
    </>
  );
}

export default Footer;
