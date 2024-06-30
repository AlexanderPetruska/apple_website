"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      duration: 1,
      opacity: 1,
      delay: 2,
      y: 0,
      ease: "power2.out",
    });
    gsap.to(".link", {
      opacity: 1,
      duration: 1,
      delay: 2,
      y: 0,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <Image
                src={"/assets/images/watch.svg"}
                width={20}
                height={20}
                alt="watch"
                className="ml-2"
              ></Image>
            </p>
            <p className="link">
              Watch the event
              <Image
                src={"/assets/images/right.svg"}
                width={10}
                height={10}
                alt="watch"
                className="ml-2"
              ></Image>
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
