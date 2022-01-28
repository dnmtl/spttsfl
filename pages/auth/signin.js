import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getProviders, signIn, useSession } from "next-auth/react";

import Loader from "../../components/Loader";

import spotifyLogo from "../../public/spotify-logo-full.png";

function Signin({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (session) return <Loader />;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
      <Head>
        <title>Login - Spotify</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png"
        />
      </Head>

      <Image
        className="animate-pulse"
        src={spotifyLogo}
        height={250}
        width={600}
        objectFit="contain"
        alt="spotify"
      />

      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              className="button-glassy"
              // className="bg-transparent border-y-0 p-4 rounded-full backdrop-blur-[5px] border-x-white border-opacity-30 border shadow-md shadow-glassy-dark-20 font-medium"
              // className="text-white py-4 px-6 rounded-full bg-[#1db954] border border-transparent
              // uppercase font-bold text-xs tracking-wider hover:bg-[#0db146] hover:scale-105
              // transition duration-300 ease-out md:text-base"
              onClick={() => {
                signIn(provider.id);
              }}
            >
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  console.log("SIGNIN -> providers: ", providers);

  return {
    props: { providers },
  };
}
