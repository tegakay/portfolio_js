import React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'
import { url } from "inspector";

interface dataProp {
    text?:string;
    imgurl:string;
    link:string
}
const Project = ({text,imgurl,link}:dataProp) => {
    console.log("here",text,imgurl,link)
  return (
    <div>
      <motion.div
      whileHover={{ scale: 1.1 }}>
      <Link href={link}>
        <Image
          className="h-auto max-w-full rounded-lg "
          src={imgurl}
          alt=""
          width={300}
          height={300}
        />
      </Link>
      </motion.div>

      <p className="my-3">{text}</p>
    </div>
  );
};

export default Project;
