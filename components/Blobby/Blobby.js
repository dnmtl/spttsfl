const Blobby = () => {
  return (
    <div className="relative w-full h-full bg-spotify overflow-hidden">
      <main className="bolby absolute inset-0 bg-rich-black mix-blend-multiply contrast-[30]">
        <div className="relative w-full h-full">
          <div className="absolute right-12 top-12 w-1/6 sm:w-1/12 aspect-square bg-white rounded-full blur-[6px]">
            <div className="blobby w-[110%] bg-transparent animate-spin-1 top-0 left-0">
              <span className="absolute w-3/5 aspect-square bg-white rounded-full" />
            </div>
            <div className="blobby w-[110%] bg-transparent animate-spin-2 bottom-0 left-0">
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

          <div className="absolute left-12 bottom-12 w-1/6 sm:w-1/12 aspect-square bg-white rounded-full blur-[6px]">
            <div className="blobby w-[110%] bg-transparent animate-spin-1 top-0 left-0">
              <span className="absolute w-3/5 aspect-square bg-white rounded-full" />
            </div>
            <div className="blobby w-[110%] bg-transparent animate-spin-2 bottom-0 left-0">
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
        </div>
      </main>
    </div>
  );
};

export default Blobby;
