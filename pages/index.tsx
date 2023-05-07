import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/comp/Navbar";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Contact from "./contact";
import bannerimg from "../assets/banner-image.jpg";
import { motion } from "framer-motion";
import Footer from "@/comp/footer";
import Projects from "@/comp/Projects";

const buttonVariants = {
  hover: {
    scale: [1, 1.1],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-56 mx-8 my-8" id="home">
      <Navbar />
      <main className="flex flex-col my-32  items-center justify-center h-full px-3  text-center md:text-left space-y-8 space-x-4 ">
        <motion.h1
          className=" text-2xl lg:text-4xl font-bold "
          initial={{ x: -1050 }}
          animate={{ x: 10 }}
          transition={{ duration: 2 }}
        >
          Hi, I am Oghenebrume Kofi
        </motion.h1>
        <motion.h2
          className="text-xl lg:text-3xl "
          initial={{ x: -1050 }}
          animate={{ x: 10 }}
          transition={{ duration: 2, delay: 1 }}
        >
          A Web Developer
        </motion.h2>
        <div className="my-4">
          <a
            href="mailto:kofitega@gmail.com"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded-full"
          >
            Contact Me
          </a>
        </div>
        <div className="flex flex-row justify-center text-center md:text-left  text-3xl space-x-5">
          <Link
            className="hover:scale-110"
            href="https://www.linkedin.com/in/kofi-oghenebrume-1b9879196/"
          >
            <AiFillLinkedin />
          </Link>
          <Link
            className="hover:scale-110"
            href="https://www.github.com/tegakay"
          >
            <AiFillGithub />
          </Link>
          <Link className="hover:scale-110" href="#">
            <AiOutlineMail />
          </Link>
        </div>

        <div></div>
      </main>
      <section>
        <h1
          className="text-2xl lg:text-4xl font-bold my-5 text-center"
          id="about"
        >
          About Me
        </h1>
        <div className="flex flex-col align-left  md:flex-row md:space-x-8 space-y-5">
          <div className="basis-1/2">
            <Image src={bannerimg} alt="Background of a coding screen" />
          </div>
          <p className="basis-2/3">
            I am a passionate web developer with expertise in building
            user-friendly and efficient web-based solutions using JavaScript,
            React, HTML, and CSS. I enjoy working on new solutions and modifying
            existing designs and implementations to improve efficiency and
            productivity. My focus is always on creating high-quality code that
            is maintainable and scalable. I am eager to continue my growth as a
            web developer and to contribute my skills to building innovative web
            solutions that make a difference.
          </p>
        </div>
      </section>
      <section>
        <Projects/>
      </section>
    <footer>
      <Footer/>
    </footer>

    </div>
  );
}
