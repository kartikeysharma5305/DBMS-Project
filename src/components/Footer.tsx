import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} IILM University. All rights
          reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="hover:text-blue-200 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            href="/faq"
            className="hover:text-blue-200 transition-colors"
          >
            FAQs
          </Link>
          <Link
            href="/policies"
            className="hover:text-blue-200 transition-colors"
          >
            Policies
          </Link>
        </div>
      </div>
    </footer>
  );
}
