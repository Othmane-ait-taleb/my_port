import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="h-screen  grid md:grid-cols-3 ">
      <div className="  flex justify-center items-center">
        <div className="rounded-full border-black border-2 flex justify-center overflow-hidden  shadow-2xl animate-bounce transition duration-150">
          <Image
            src={"/images/otait-ta.jpeg"}
            alt="just my image"
            width={390}
            height={190}
          />
        </div>
      </div>
      <div className="bg-red-200 md:col-span-2 md:order-first"></div>
    </div>
  );
}
