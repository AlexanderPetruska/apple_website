import Image from "next/image";
import React from "react";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <Image
          src="/assets/images/apple.svg"
          alt="Apple"
          width={14}
          height={18}
        />
        <div className="flex flex-1 justify-center gap-8 max-sm:hidden">
          {navLists.map((nav, i) => (
            <div
              key={i}
              className="cursor-pointer text-sm text-gray transition-all hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <Image
            src={"/assets/images/search.svg"}
            alt="Search"
            width={18}
            height={18}
          />
          <Image
            src={"/assets/images/bag.svg"}
            alt="Bag"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
