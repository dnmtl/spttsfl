import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";

// import Sidebar from "../components/Sidebar";
// import Center from "../components/Center";
// import Player from "../components/Player";
import Loader from "../components/Loader";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin");
    },
  });

  console.log("HOME -> session: ", session);
  console.log("HOME -> status: ", status);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="w-full h-full">
      <Head>
        <title>Spotify - Dashboard</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/spotify-512.png"
        />
      </Head>

      <Dashboard />

      {/* <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <Sidebar />
          <Center />
        </main>

        <div className="sticky bottom-0">
          <Player />
        </div>
      </div> */}
    </div>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
