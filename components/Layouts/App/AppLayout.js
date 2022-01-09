import Blobby from "../../Blobby/Blobby";

const AppLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center max-h-screen h-screen bg-black overflow-hidden">
      <Blobby />
      <div className="absolute flex container max-h-screen h-screen overflow-hidden">
        <div className="flex flex-1 items-center justify-center h-auto my-2 sm:my-10 overflow-hidden glassmorph rounded-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
