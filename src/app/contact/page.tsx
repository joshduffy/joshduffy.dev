import { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Josh Duffy",
};

export default function Contact() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm mb-8 inline-block"
        >
          &larr; Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-4">Contact</h1>

        <p className="text-neutral-400 mb-12 text-lg">
          Have a question or want to work together? I&apos;d love to hear from
          you.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>

            <div className="space-y-4">
              <a
                href="mailto:josh@joshduffy.dev"
                className="flex items-center gap-4 p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-neutral-400 text-sm">josh@joshduffy.dev</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/changeleadership/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-neutral-400 text-sm">
                    Connect professionally
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/joshduffy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-neutral-400 text-sm">View my projects</p>
                </div>
              </a>
            </div>
          </section>

          <section className="pt-8 border-t border-neutral-800">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <p className="text-neutral-400">Philadelphia, PA</p>
          </section>
        </div>
      </div>
    </main>
  );
}
