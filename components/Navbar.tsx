import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="flex items-center justify-center space-x-4 text-lg">
      <Link
        href={"/"}
        className="hover:text-pink-700 hover:underline transition-all"
      >
        Home
      </Link>

      <Link
        href="/about"
        className="hover:text-pink-700 hover:underline transition-all"
      >
        About
      </Link>
      <Link
        href="/products"
        className="hover:text-pink-700 hover:underline transition-all"
      >
        Products
      </Link>
      <Link
        href="/movies"
        className="hover:text-pink-700 hover:underline transition-all"
      >
        Movies
      </Link>
    </nav>
  );
}
