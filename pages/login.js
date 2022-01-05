import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";

import logo from "../public/logo.png";

function Login({ providers }) {
  console.log("LOGIN -> providers: ", providers);
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <div className="w-52 mb-5">
        <Image src={logo} alt="Logo" objectFit="cover" />
      </div>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log("LOGIN GETSERVERSIDEPROPS -> providers: ", providers);

  return {
    props: {
      providers,
    },
  };
}
