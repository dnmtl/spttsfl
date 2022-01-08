import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import clsx from "clsx";
import { ChevronDownIcon, LogoutIcon } from "@heroicons/react/outline";

const UserDropdown = () => {
  const { data: session } = useSession();
  const [isOpened, setIsOpened] = useState(false);

  console.log("USERDROPDOWN -> session: ", session);

  return (
    <div className="absolute top-5 right-8 w-52 max-h-64 rounded-3xl bg-black bg-opacity-80 hover:bg-opacity-70">
      <div className="rounded-3xl overflow-hidden">
        <div className="w-full">
          <div
            className="flex justify-between items-center space-x-3 cursor-pointer rounded-3xl p-1 pr-2 text-white"
            onClick={() => setIsOpened((opened) => !opened)}
          >
            <img
              className="rounded-full w-10 h-10"
              src={session?.user.image}
              alt="user"
            />
            <h2>{session?.user.name}</h2>
            <ChevronDownIcon
              className={clsx("w-5 h-5 transition-base", {
                "rotate-180": isOpened,
              })}
            />
          </div>
          <div
            className={clsx(
              "flex justify-between max-h-0 px-4 py-0 ease-in-out duration-300",
              { "max-h-52 py-4": isOpened }
            )}
          >
            <div className="flex flex-col flex-1 items-center p-2">
              <div
                className="flex w-fit items-center justify-center gap-2 bg-slate-100 cursor-pointer py-1 px-3 rounded-full text-slate-900 text-sm"
                onClick={signOut}
              >
                <LogoutIcon className="w-5 h-5" />
                <div>Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
