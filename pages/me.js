import Head from "next/head";
import {
  LocationMarkerIcon,
  ArrowLeftIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

import { useUserInfo } from "../hooks/useUserInfo";

const MePage = () => {
  const { profile, isLoading } = useUserInfo();

  if (isLoading) {
    return null;
  }

  return (
    <div className="w-full h-full md:flex md:items-center md:flex-col md:justify-evenly overflow-auto">
      <Head>
        <title>Spotify - {profile.display_name}</title>
      </Head>

      <div className="relative w-full md:w-auto h-full md:h-full md:max-h-56 lg:max-h-80 md:aspect-square">
        <Image
          className="md:rounded-full"
          src={profile.images[0].url}
          layout="fill"
          objectFit="cover"
          alt="me"
          quality={100}
        />
      </div>

      <Link href={"/"}>
        <div className="absolute top-5 left-5 button-glassy rounded-full p-2">
          <ArrowLeftIcon className="w-5 h-5" />
        </div>
      </Link>

      <div className="absolute md:relative inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black md:bg-none px-4">
        <div className="flex md:justify-center items-center space-x-2 text-glassy-60">
          <LocationMarkerIcon className="w-5 h-5" />
          <div className="font-thin">{profile.country}</div>
        </div>

        <div className="flex md:justify-center items-center space-x-2">
          <div className="text-4xl md:text-7xl font-medium uppercase my-3">
            {profile.display_name}
          </div>
          {profile.isPremium && (
            <BadgeCheckIcon className="w-5 h-5 text-spotify" />
          )}
        </div>

        <div className="flex md:justify-center space-x-4">
          <div className="flex flex-col">
            <span className="text-glassy-90 text-xl md:text-center">
              {profile.followers.total}
            </span>
            <span className="text-glassy-50 capitalize text-sm font-medium">
              Followers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MePage;
