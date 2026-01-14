import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-neutral-800">
      <div className="max-w-3xl mx-auto text-center text-neutral-500 text-sm">
        <p className="mb-4">
          &copy; {currentYear} Josh Duffy. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <Link
            href="/contact"
            className="hover:text-neutral-300 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="hover:text-neutral-300 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}
