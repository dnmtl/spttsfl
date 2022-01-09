const Blobby = () => {
  return (
    <main className="bolby absolute inset-0 bg-black blur-[8px] contrast-[18] mix-blend-screen">
      <div className="relative left-12 top-12 w-1/6 sm:w-1/12 aspect-square bg-white rounded-full">
        <div className="absolute aspect-square w-[110%] rounded-full bg-transparent animate-spin-1 top-0 left-0">
          <span className="absolute w-3/5 aspect-square bg-white rounded-full" />
        </div>
        <div className="absolute aspect-square w-[110%] rounded-full bg-transparent animate-spin-2 bottom-0 left-0">
          <span className="absolute w-2/5 aspect-square bg-white rounded-full" />
        </div>
        <span className="absolute w-full animate-spin-3">
          <span className="blobby bottom-1/4 left-0 w-1/3" />
        </span>
        <span className="absolute w-full bottom-0 right-1/3 animate-spin-4">
          <span className="blobby bottom-1/4 right-0 w-1/4" />
        </span>
        <span className="absolute w-full bottom-0 animate-spin-5">
          <span className="blobby bottom-1/4 right-0 w-1/4" />
        </span>
        <span className="absolute w-full left-0 animate-spin-6">
          <span className="blobby bottom-1/4 left-0 w-1/4" />
        </span>
      </div>
    </main>
  );
};

export default Blobby;
