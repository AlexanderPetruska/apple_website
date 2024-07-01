"use client ";

import { Html } from "@react-three/drei";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <Html>
      <div className="absolute left-0 top-0 flex size-full items-center justify-center">
        <div className="flex size-[10vw] flex-col items-center justify-center gap-4 rounded-full">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
          <p className="font-light text-gray-200">Loading...</p>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
