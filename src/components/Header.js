import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-white py-4 border-b border-white">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex gap-6 items-center ">
          <Link href="/" className="font-bold">
            LinkList
          </Link>
          <nav className="flex gap-2 text-sm text-slate-700">
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex gap-4 text-sm text-slate-700">
          <Link href="/signin">Sign In</Link>
          <Link href="/register">Create Account</Link>
        </div>
      </div>
    </header>
  );
}
