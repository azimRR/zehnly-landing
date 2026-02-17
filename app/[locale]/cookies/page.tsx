import { Footer } from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20">
        <h1 className="font-jakarta text-3xl font-semibold text-gray-200 md:text-4xl mb-4">
          Cookie Policy
        </h1>
        <p className="text-sm text-purple-200/65 mb-12">Last updated: February 17, 2026</p>

        <div className="prose-dark space-y-8 text-purple-200/65 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">2. How We Use Cookies</h2>
            <p className="mb-3">We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-gray-300">Essential Cookies:</strong> Required for the website to function properly. These include cookies for language preferences and session management. You cannot opt out of these cookies.
              </li>
              <li>
                <strong className="text-gray-300">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous usage data. We use this information to improve our website and services.
              </li>
              <li>
                <strong className="text-gray-300">Functional Cookies:</strong> Remember your choices (such as language or region) to provide a more personalized experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">3. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We use services from Google Analytics to help analyze website traffic. These third parties may use cookies according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">4. Managing Cookies</h2>
            <p className="mb-3">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="mt-3">
              Please note that blocking certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">5. Mobile Application</h2>
            <p>
              Our mobile application (Zehnly AI) uses similar technologies such as local storage and device identifiers to provide a personalized learning experience. The information collected is governed by our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">6. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">7. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{" "}
              <a href="mailto:support@zehnly.ai" className="text-purple-400 hover:text-purple-300 transition">support@zehnly.ai</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
