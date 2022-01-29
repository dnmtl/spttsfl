import Image from "next/image";
import { ThreeBounce } from "better-react-spinkit";

import spotifyLogo from "../../../public/spotify-logo-full.png";

const Loader = () => (
  <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 px-6">
    <Image
      className="animate-pulse"
      src={spotifyLogo}
      height={250}
      width={600}
      objectFit="contain"
      alt="spotify"
    />

    <ThreeBounce size={23} color="#15883e" />
  </div>
);

export default Loader;
