"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Modal from "../Header/Modal";

const Hero = () => {
  return (
    <div className="px-24  pt-[62px] pb-14">
      <section className="flex justify-center gap-10 items-center ">
        <div className="flex flex-col basis-[50%] gap-2">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-3xl">
              Utilize our solutions to expand
            </h3>
            <div className="flex gap-3 items-center">
              <h3 className="font-bold text-3xl">your</h3>
              <h3 className="text-[#7E5CDC] font-bold text-3xl">Business</h3>
            </div>
          </div>
          <p className="text-lg text-[#6D6D6D] leading-9">
            We are a team of passionate experts with proven experience in
            helping businesses thrive in today's competitive landscape. We
            leverage cutting-edge technologies and industry insights to
            deliver impactful results.
          </p>
          <Modal />
        </div>
        <Image
          width={500}
          height={500}
          src={"/Landing.png"}
          alt={""}
          className="img"
        />
      </section>
    </div>
  );
};

export default Hero;
