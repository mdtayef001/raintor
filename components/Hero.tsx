"use client";

import Image from "next/image";
import ButtonCall from "./ButtonCall";

export default function Hero() {
  return (
    <section className="container mx-auto pt-24 pb-24 px-9 relative ">
      <h1 className="text-[78px] font-bold max-w-[900px] leading-32">
        Trusted{" "}
        <span className="bg-black text-white px-4 rounded-2xl font-medium">
          Partner
        </span>{" "}
        for Your Website{" "}
        <span className="bg-black text-white px-4 rounded-2xl font-medium">
          Develop.
        </span>
      </h1>
      <div className="max-w-[700px] mx-auto">
        <p className=" text-lg mt-12 ">
          Building the worlds best marketing websites for over a decade. <br />
          Your trusted partner for strategy, design, and dev.
        </p>
        <div className="mt-10">
          <ButtonCall />
        </div>
      </div>
      <div className="absolute bottom-15">
        <Image src={"/icons_text.png"} width={70} height={20} alt="icoons" />{" "}
      </div>
    </section>
  );
}
