import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="">
      <div className="relative ">
        <Image
          src={"/Rectangle 5.png"}
          width={834}
          height={550}
          layout="responsive"
        />
        <p className="absolute  text-white text-center top-1/2 bottom-1/2 font-bold text-2xl md:text-7xl lg:top-40 lg:left-10  ">
          Watch something
          <br /> incredible.
        </p>
      </div>
    </section>
  );
};

export default Hero;
