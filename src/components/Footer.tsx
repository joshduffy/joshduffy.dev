export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-neutral-800">
      <div className="max-w-3xl mx-auto text-center text-neutral-500 text-sm">
        <p className="mb-2">
          &copy; {currentYear} Josh Duffy. All rights reserved.
        </p>
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
