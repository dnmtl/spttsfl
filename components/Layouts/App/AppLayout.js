import Blobby from "../../Blobby/Blobby";

const AppLayout = ({ children }) => {
  return (
    <div className="max-h-screen h-screen flex justify-center items-center bg-rich-black overflow-hidden">
      <Blobby />

      <div className="max-h-screen h-screen absolute flex container overflow-hidden">
        <div className="flex flex-1 items-center justify-center h-auto my-2 sm:my-10 overflow-hidden bg-glassy">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
