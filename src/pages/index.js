import Image from "next/image";
import { Poppins } from "next/font/google";
import InitialInfo from "@/components/InitialInfo";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectShow from "@/components/ProjectShow";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <InitialInfo />
      <About />
      <Projects />
      {/* <ProjectShow /> */}
      <Footer />
    </>
  );
}
