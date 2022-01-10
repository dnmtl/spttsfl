import Blobby from "../../Blobby/Blobby";

const AppLayout = ({ children }) => {
  return (
    <div className="max-h-screen h-screen flex justify-center items-center bg-rich-black overflow-hidden">
      <Blobby />

      <div className="max-h-screen h-screen absolute flex container overflow-hidden">
        <div className="relative flex flex-1 items-center justify-center h-auto my-2 sm:my-10 overflow-hidden bg-glassy border-gradient">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20" />
          <div className="relative w-full h-full">{children}</div>
          {/* <div className="relative w-full h-full text-white mix-blend-overlay opacity-50">{children}</div> */}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
