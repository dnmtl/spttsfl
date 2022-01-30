import { useMemo } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

import Blobby from "../../Blobby/Blobby";
import LoadingContainer from "../../common/LoadingContainer/LoadingContainer";

import noisyBackground from "../../../public/svg/noise.svg";

const AppLayout = ({ children }) => {
  const { status } = useSession();

  const isLoading = useMemo(() => status === "loading", [status]);

  return (
    <div className="max-h-screen h-screen relative flex justify-center items-center bg-rich-black overflow-hidden lowercase text-white">
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
            priority
          />
          <div className="relative w-full h-full">
            <LoadingContainer loading={isLoading}>{children}</LoadingContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
