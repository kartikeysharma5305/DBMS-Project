import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">IILM University</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Homepage
            </Link>
          </li>
          <li>
            <Link
              href="/visit"
              className="hover:text-blue-200 transition-colors"
            >
              Visit
            </Link>
          </li>
          <li>
            <Link
              href="/apply"
              className="hover:text-blue-200 transition-colors"
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              href="/portal"
              className="hover:text-blue-200 transition-colors"
            >
              IILM Portal
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
