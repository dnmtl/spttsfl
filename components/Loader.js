import Image from "next/image";
import { ThreeBounce } from "better-react-spinkit";

function Loader() {
  return (
    <div className="h-screen">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px] mix-blend-color">
          <Image
            src="https://rb.gy/y9mwtb"
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
          />
        </span>

        <ThreeBounce size={23} color="#15883e" />
      </div>
    </div>
  );
}

export default Loader;
