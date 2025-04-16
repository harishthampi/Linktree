import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <main>
      <section className="pt-32">
        <div className="max-w-md  mb-8">
          <h1 className="text-6xl font-bold mb-6">Your one link <br/>
          for everything
          </h1>
          <h2 className="text-slate-500 text-xl">Share your links,social profiles,contact info and more on one page</h2>
        </div>
        <form className="inline-flex shadow-lg items-center ">
          <span className="bg-white py-4 pl-4">linklist.to/</span>
          <input placeholder="username" type="text" className="bg-white py-4"></input>
          <button type="submit" className="bg-blue-500 text-white px-6 py-4">Join for Free</button>
        </form>

      </section>
    </main>
  )
}
