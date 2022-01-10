import Blobby from "../../Blobby/Blobby";

const AppLayout = ({ children }) => {
  return (
    // <div className="flex justify-center items-center max-h-screen h-screen bg-green-800 overflow-hidden">
    // <div className="flex justify-center items-center max-h-screen h-screen bg-green-800 overflow-hidden">
    <div className="flex justify-center items-center max-h-screen h-screen bg-rich-black overflow-hidden">
      {/* <div className="bg-green-900"> */}
      {/* <div className="absolute -inset-10 bg-green-900"> */}
        <Blobby />
      {/* </div> */}
      <div className="absolute flex container max-h-screen h-screen overflow-hidden">
        <div className="flex flex-1 items-center justify-center h-auto my-2 sm:my-10 overflow-hidden glassmorph rounded-3xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
