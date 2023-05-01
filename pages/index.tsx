import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/comp/Navbar";
import Link from "next/link";
import { AiFillLinkedin,AiFillGithub,AiOutlineMail } from 'react-icons/ai';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-56">
      <Navbar />
      <main className="flex flex-col items-center justify-center h-full px-3  text-center space-y-7 ">
        <h1 className=" text-2xl lg:text-4xl font-bold ">Hi, I am Oghenebrume Kofi</h1>
        <h2 className="text-xl lg:text-3xl font-bold">A Web Developer</h2>
        
        <div className="flex flex-row justify-center text-center  text-3xl space-x-5">
          <Link className="hover:scale-110" href="https://www.linkedin.com/in/kofi-oghenebrume-1b9879196/"><AiFillLinkedin/></Link>
          <Link className="hover:scale-110" href="https://www.github.com/tegakay"><AiFillGithub/></Link>
          <Link className="hover:scale-110" href="#"><AiOutlineMail/></Link>
          
        </div>
      </main>
    </div>
  );
}
