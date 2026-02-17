import { Footer } from "@/components/Footer";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-purple-200/50">
            <span className="inline-flex bg-linear-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </div>
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-jakarta text-3xl font-semibold text-transparent md:text-4xl mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-purple-200/65 max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="font-jakarta font-semibold text-gray-200 mb-2">Email</h3>
            <a href="mailto:support@zehnly.ai" className="text-sm text-purple-400 hover:text-purple-300 transition">
              support@zehnly.ai
            </a>
          </div>
          <div className="text-center p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-jakarta font-semibold text-gray-200 mb-2">In-App Support</h3>
            <p className="text-sm text-purple-200/65">
              Tap Settings &rarr; Help in the app
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl border border-gray-800 bg-gray-900/30">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="font-jakarta font-semibold text-gray-200 mb-2">Location</h3>
            <p className="text-sm text-purple-200/65">
              Tashkent, Uzbekistan
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-jakarta text-xl font-semibold text-gray-200 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I cancel my subscription?", a: "You can cancel your subscription anytime through your App Store or Google Play Store settings. Go to Subscriptions and select Zehnly AI to manage or cancel." },
              { q: "Is there a free trial?", a: "The free plan lets you learn up to 200 words with access to all 6 games and basic speaking practice — no credit card required." },
              { q: "Which languages is the app available in?", a: "The app interface supports English, Russian, and Uzbek. The learning content is focused on English vocabulary and speaking." },
              { q: "How does the AI adapt to my level?", a: "Our AI analyzes your accuracy, speed, and patterns across all games to dynamically adjust difficulty. The more you play, the better it understands your strengths and areas for improvement." },
              { q: "Can I use Zehnly offline?", a: "Some features like Flashcards work offline. Speaking practice and Word Battle require an internet connection." },
            ].map((faq, i) => (
              <div key={i} className="p-5 rounded-xl border border-gray-800 bg-gray-900/30">
                <h3 className="font-jakarta font-semibold text-gray-200 mb-2">{faq.q}</h3>
                <p className="text-sm text-purple-200/65">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
