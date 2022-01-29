import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { getProviders, signIn, useSession } from "next-auth/react";

import spotifyLogo from "../../public/spotify-logo-full.png";

function Signin({ providers }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("SIGNIN -> status: ", status);
  console.log("SIGNIN -> session: ", session);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-8 px-6">
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

  return {
    props: { providers },
  };
}
