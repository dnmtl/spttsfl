import Link from "next/link";

const NotFound = () => (
  <div className="w-full h-full flex flex-col justify-center items-center">
    <h1 className="text-8xl md:text-14xl font-medium">error</h1>
    <p className="text-sm text-center text-glassy-70 pt-2">
      ooops, the page you are looking for doesn't exist :(
    </p>

    <Link href={"/"}>
      <button className="button-glassy my-12">Homepage</button>
    </Link>
  </div>
);

export default NotFound;
