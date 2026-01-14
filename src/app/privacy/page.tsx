import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for joshduffy.dev",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-neutral-500 hover:text-neutral-300 transition-colors text-sm mb-8 inline-block"
        >
          &larr; Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-neutral max-w-none space-y-6 text-neutral-300">
          <p className="text-sm text-neutral-500">
            Last updated: January 2025
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Overview
            </h2>
            <p>
              This website (joshduffy.dev) is a personal portfolio site owned
              and operated by Josh Duffy. I respect your privacy and am
              committed to being transparent about any data practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Information Collection
            </h2>
            <p>This site collects minimal data:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Analytics:</strong> I use Google Analytics and Vercel
                Analytics to understand how visitors use this site. This
                includes anonymous information like pages visited, time spent,
                and general geographic location.
              </li>
              <li>
                <strong>Contact Form:</strong> If you contact me via email, I
                will receive and store your email address and message content to
                respond to your inquiry.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Cookies
            </h2>
            <p>
              This site may use cookies for analytics purposes. These are small
              text files stored on your device that help analyze web traffic.
              You can choose to accept or decline cookies through your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Third-Party Services
            </h2>
            <p>This site uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Vercel:</strong> Hosting and analytics
              </li>
              <li>
                <strong>Google Analytics:</strong> Traffic analysis
              </li>
            </ul>
            <p className="mt-2">
              Each service has its own privacy policy governing their data
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Data Security
            </h2>
            <p>
              This site is served over HTTPS to ensure secure data transmission.
              I do not sell, trade, or transfer your personal information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, please contact me
              at{" "}
              <a
                href="mailto:josh@joshduffy.dev"
                className="text-white hover:text-neutral-300 transition-colors underline"
              >
                josh@joshduffy.dev
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-8 mb-4">
              Changes to This Policy
            </h2>
            <p>
              I may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
