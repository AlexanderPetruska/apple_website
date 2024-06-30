"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 640
      ? "/assets/videos/smallHero.mp4"
      : "/assets/videos/hero.mp4",
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 640) {
      setVideoSrc("/assets/videos/smallHero.mp4");
    } else {
      setVideoSrc("/assets/videos/hero.mp4");
    }
  };

  useGSAP(() => {
    gsap.to(".hero-title", {
      duration: 2.5,
      opacity: 1,
      delay: 2,
      ease: "power2.out",
    });
    gsap.to("#cta", {
      duration: 2.5,
      opacity: 1,
      delay: 2,
      y: -50,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center opacity-0"
      >
        <Link href="#highlights" className="btn">
          Buy
        </Link>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
