import { ChevronDownIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const UserDropdown = () => {
  const { data: session } = useSession();
  const [isOpened, setIsOpened] = useState(false);

  console.log("USERDROPDOWN -> session: ", session);

  return (
    <div className="absolute top-5 right-8">
      <div
        className={clsx(
          "min-h-[14px] relative flex-grow m-3 overflow-hidden transition-base",
          { active: isOpened }
        )}
      >
        <div
          className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white transition-base"
          onClick={signOut}
        //   onClick={() => setIsOpened((s) => !s)}
        >
          <div className="flex items-center gap-5">
            <img
              className="rounded-full w-10 h-10"
              src={session?.user.image}
              alt="user"
            />
            <h2>{session?.user.name}</h2>
            <ChevronDownIcon className="w-5 h-5" />
          </div>
        </div>
        {/* <div>
          <div>Hidden text</div>
        </div> */}
      </div>
    </div>
  );
};

export default UserDropdown;
