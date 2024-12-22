import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 to-blue-600  ">

      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white font-bold">Browse our blog collection</h2>
        <Link href="/blogs" className="bg-white text-lg font-bold text-blue-600 py-2 rounded px-6 my-2">Explore Blogs</Link>
      </div>


    </div>
  );
}
