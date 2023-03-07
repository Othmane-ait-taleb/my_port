import { description } from "@/constants";
import Image from "next/image";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
export default function Hero() {
  return (
    <div className="h-screen  grid md:grid-cols-3 ">
      <div className="  flex justify-center items-center">
        <div className="photo ">
          <Image
            src={"/images/otait-ta.jpeg"}
            alt="just my image"
            width={390}
            height={190}
            className="rounded-full h-80 w-80 md:"
          />
        </div>
      </div>
      <div className=" md:col-span-2 md:order-first flex">
        <div className=" flex flex-col justify-center items-center gap-12 w-1/12 ">
          <AiOutlineInstagram className="text-primary" size={30} />
          <FiGithub className="text-primary" size={30} />
        </div>
        <div className=" w-full">
          <h3 className="md:text-center pl-2 font-medium text-3xl w-full mt-2">
            Othmane Ait Taleb
          </h3>
          <div className="flex mt-8 items-center">
            <hr className=" w-1/3 bg-primary text-primary h-1  mr-1" />
            <h1 className="text-lg text-primary">Full stack developer</h1>
          </div>
          <div className="text-l text-base-300 font-bold">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
