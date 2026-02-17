import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20">
        <h1 className="font-jakarta text-3xl font-semibold text-gray-200 md:text-4xl mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-purple-200/65 mb-12">Last updated: February 17, 2026</p>

        <div className="prose-dark space-y-8 text-purple-200/65 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Zehnly AI (&quot;the App&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">2. Description of Service</h2>
            <p>
              Zehnly AI is an English language learning application that provides gamified vocabulary building, speaking practice, and AI-powered adaptive learning through six interactive mini-games: Flashcards, Odd One Out, Connections, 4 Pics 1 Word, Squares, and Word Battle.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>You must be at least 4 years old to use the App. Users under 13 require parental consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">4. Subscriptions and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-gray-300">Free Plan:</strong> Access to learn up to 200 words with all 6 games and basic speaking practice.</li>
              <li><strong className="text-gray-300">Monthly Plan ($5/month):</strong> Unlimited vocabulary, full game access, AI-powered adaptive difficulty, and advanced speaking practice.</li>
              <li><strong className="text-gray-300">Yearly Plan ($39/year):</strong> All Monthly features at a discounted rate of $3.25/month.</li>
              <li>Subscriptions auto-renew unless canceled at least 24 hours before the end of the current period.</li>
              <li>Payments are processed through Apple App Store or Google Play Store according to their respective terms.</li>
              <li>Refunds are handled by the respective app store according to their refund policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Interfere with or disrupt the App&apos;s servers or networks</li>
              <li>Use automated systems or bots to access the App</li>
              <li>Upload harmful, offensive, or inappropriate content</li>
              <li>Impersonate another person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of Zehnly AI — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are the exclusive property of Zehnly AI and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">7. Disclaimer of Warranties</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee that the App will be uninterrupted, error-free, or that learning outcomes will be achieved. Zehnly AI is a supplementary learning tool and is not a substitute for formal education.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Zehnly AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, whether based on warranty, contract, tort, or any other legal theory.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">9. Termination</h2>
            <p>
              We may terminate or suspend your account at any time for violation of these Terms. Upon termination, your right to use the App will immediately cease. You may delete your account at any time through the App settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes through the App. Your continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-200 mb-3">11. Contact Us</h2>
            <p>
              For questions about these Terms, please contact us at{" "}
              <a href="mailto:support@zehnly.ai" className="text-purple-400 hover:text-purple-300 transition">support@zehnly.ai</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
