import React from "react";
import { H2LargeTitle } from "../bosons/TitleStyles";
import { LargeText } from "../bosons/FontStyles";
import Link from "next/link";

function Banner() {
  return (
    <div
      className="text-white bg-black/50 justify-items grid h-[80vh] w-screen grid-cols-4 place-content-center gap-[24px] bg-cover bg-blend-overlay md:grid-cols-8 lg:grid-cols-12"
      style={{
        backgroundImage:
          "url('https://www.sparklecat.com/wp-content/uploads/Summer082522cIMG_9271.jpg')",
      }}
    >
      <div className="col-span-4 md:col-start-3 lg:col-start-5 text-center">
        <H2LargeTitle title="Sparkling In Silver" />
        <LargeText><Link className="underline" href="/new-in">Explore the collection</Link></LargeText>
      </div>
    </div>
  );
}

export default Banner;
