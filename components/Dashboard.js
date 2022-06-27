import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
// import SpotifyWebApi from "spotify-web-api-node";
import Image from "next/image";
import Link from "next/link";
import {
  CollectionIcon,
  BookmarkIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline";
import SolidHeartIcon from "@heroicons/react/solid/HeartIcon";

import { playingTrack } from "../atoms/track";
import FreePlayer from "./Player/FreePlayer";
import PremiumPlayer from "./Player/PremiumPlayer";
import Sidebar from "./Sidebar";
import UserDropdown from "./UserDropdown";
import CurrentPlaylist from "./CurrentPlaylist";
import { useUserInfo } from "../hooks/useUserInfo";
import { useSongInfo } from "../hooks/useSongInfo";

// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.SPOTIFY_CLIENT_ID,
// });

const Dashboard = () => {
  // const { data: session } = useSession();
  const { profile, isLoading } = useUserInfo();
  const { song, isLoading: isSongLoading } = useSongInfo();
  // console.log("DASHBOARD -> session: ", session);
  // const { accessToken } = session;

  // const [currentTrack, setCurrentTrack] = useRecoilState(playingTrack);
  // const [showPlayer, setShowPlayer] = useState(false);

  // const chooseTrack = (track) => {
  //   setCurrentTrack(track);
  // };

  // useEffect(() => {
  //   setShowPlayer(true);
  // }, []);

  // useEffect(() => {
  //   if (!accessToken) return;
  //   spotifyApi.setAccessToken(accessToken);
  // }, [accessToken]);

  console.log("DASHBOARD -> profile: ", profile);
  console.log("DASHBOARD -> song: ", song);

  if (isLoading || isSongLoading) {
    return null;
  }

  return (
    <div className="dashboard h-full">
      <div className="sidebar absolute inset-y-0 w-16 bg-indigo-500">
        <div className="h-full flex flex-col justify-between space-y-5 px-2 py-4">
          <div className="space-y-6">
            <Link href={"/"}>
              <div className="w-full h-auto aspect-square cursor-pointer mb-5">
                <Image
                  className="bg-black rounded-full"
                  src="https://rb.gy/xkacau"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </Link>

            <Link href={"/me"}>
              <div className="w-full h-auto aspect-square cursor-pointer p-1">
                {profile.images.length > 0 && (
                  <Image
                    className="rounded-full"
                    src={profile.images?.[0]?.url}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
              </div>
            </Link>
            <div className="mx-3 my-1">
              <Link href={"/likes"}>
                <div className="w-full h-auto aspect-square cursor-pointer">
                  <BookmarkIcon className="w-full h-full" />
                </div>
              </Link>
            </div>
            <div className="mx-3 my-1">
              <Link href={"/collection"}>
                <div className="w-full h-auto aspect-square cursor-pointer">
                  <CollectionIcon className="w-full h-full" />
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <div className="mx-3 my-1">
              <div className="w-full h-auto aspect-square cursor-pointer">
                <VolumeUpIcon className="w-full h-full" />
              </div>
            </div>

            <div className="mx-3 my-1">
              <Link href={"/likes"}>
                <div className="w-full h-auto aspect-square cursor-pointer">
                  <SolidHeartIcon className="w-full h-full" />
                </div>
              </Link>
            </div>
            <div className="w-full h-auto aspect-square cursor-pointer">
              <Image
                className="rounded-xl"
                src={song.item.album.images[0].url}
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="player h-full bg-green-600">player</div>
    </div>
  );
};

// {
/* <>
  <Sidebar />
  <UserDropdown />

  <div className="fixed bottom-0 left-0 right-0 z-50">
        {session.user.isPremium ? (
          <PremiumPlayer accessToken={accessToken} trackUri={currentTrack} />
        ) : (
          <FreePlayer accessToken={accessToken} trackUri={currentTrack} />
        )}
      </div>
</>; */
// }

export default Dashboard;
