import Navbar from "@/comp/Navbar";
import React from "react";

const about = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col px-5 mx-10 justify-center">
        <h1 className="text-2xl lg:text-4xl font-bold">About Me</h1>
        <p>
          I am a passionate web developer with expertise in building
          user-friendly and efficient web-based solutions using JavaScript,
          React, HTML, and CSS.  I enjoy working on new
          solutions and modifying existing designs and implementations to
          improve efficiency and productivity. My focus is always on creating
          high-quality code that is maintainable and scalable. I am eager to
          continue my growth as a web developer and to contribute my skills to
          building innovative web solutions that make a difference.
        </p>
      </main>
    </div>
  );
};

export default about;
