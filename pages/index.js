import { getSession } from "next-auth/react";

import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import Player from "../components/Player";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log("GETSERVERSIDEPROPS -> context: ", context);
  const session = await getSession(context);
  console.log("GETSERVERSIDEPROPS -> session: ", session);

  return {
    props: {
      session,
    },
  };
}
