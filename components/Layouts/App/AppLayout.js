import Image from "next/image";

import Blobby from "../../Blobby/Blobby";

import noisyBackground from "../../../public/svg/noise.svg";

const AppLayout = ({ children }) => {
  return (
    <div className="max-h-screen h-screen flex justify-center items-center bg-rich-black overflow-hidden lowercase text-white">
      <Blobby />

      <div className="max-h-screen h-screen absolute flex container overflow-hidden">
        <div className="relative flex flex-1 items-center justify-center h-auto my-2 sm:my-10 overflow-hidden bg-glassy border-gradient">
          <Image
            className="mix-blend-overlay opacity-[0.15]"
            src={noisyBackground}
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="noise"
          />
          {/* <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-[0.15]" /> */}
          <div className="relative w-full h-full">{children}</div>
          {/* <div className="relative w-full h-full text-white mix-blend-overlay opacity-50">{children}</div> */}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
