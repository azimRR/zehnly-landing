import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20">
        <h1 className="font-jakarta text-3xl font-semibold text-gray-200 md:text-4xl mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-purple-200/65 mb-12">Last updated: February 17, 2026</p>

        <div className="prose-dark space-y-8 text-purple-200/65 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">1. Introduction</h2>
            <p>
              Zehnly AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Zehnly AI mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-300">Account Information:</strong> Name, email address, and profile details when you create an account.</li>
              <li><strong className="text-gray-300">Usage Data:</strong> Game scores, learning progress, session duration, and feature interactions.</li>
              <li><strong className="text-gray-300">Device Information:</strong> Device type, operating system, and unique device identifiers.</li>
              <li><strong className="text-gray-300">Voice Data:</strong> Audio recordings during speaking practice sessions, processed in real-time for pronunciation feedback and not stored permanently.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and personalize your learning experience</li>
              <li>To adapt game difficulty using our AI algorithms</li>
              <li>To track your progress and provide analytics</li>
              <li>To improve our services and develop new features</li>
              <li>To process subscription payments</li>
              <li>To send you updates and promotional materials (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our application, such as payment processors, analytics providers, and cloud hosting services. These providers are bound by confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption in transit and at rest, secure authentication, and regular security audits to protect your information. However, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and download your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of promotional communications</li>
              <li>Restrict or object to certain data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Zehnly AI is designed for users of all ages. We comply with applicable children&apos;s privacy laws. We do not knowingly collect personal information from children under 13 without verifiable parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the &quot;Last updated&quot; date above.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@zehnly.ai" className="text-purple-400 hover:text-purple-300 transition">support@zehnly.ai</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
