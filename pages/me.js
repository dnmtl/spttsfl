import Head from "next/head";
import {
  LocationMarkerIcon,
  ArrowLeftIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

import useUserInfo from "../hooks/useUserInfo";

const MePage = () => {
  const { profile, error, isLoading } = useUserInfo();

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{profile.display_name} Profile - Spotify</title>
      </Head>

      <div className="relative w-auto md:w-1/6 h-full md:h-auto md:m-auto md:aspect-square md:absolute md:top-1/3 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 object-cover opacity-70">
        <Image
          className="md:rounded-full"
          src={profile.images[0].url}
          layout="fill"
          objectFit="cover"
          alt="me"
        />
      </div>

      <div className="absolute inset-0">
        <Link href={"/"}>
          <div className="absolute top-5 left-5 button-glassy rounded-full p-2">
            <ArrowLeftIcon className="w-5 h-5" />
          </div>
        </Link>

        <div className="absolute inset-0 top-3/4 sm:top-2/3 bg-gradient-to-b from-transparent to-black px-4">
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
    </>
  );
};

export default MePage;
