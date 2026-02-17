import { Footer } from "@/components/Footer";

const posts = [
  {
    title: "How Gamification Makes Language Learning 3x More Effective",
    excerpt: "Research shows that game-based learning dramatically improves vocabulary retention. Here's the science behind why Zehnly's approach works.",
    date: "Feb 10, 2026",
    category: "Learning Science",
    categoryColor: "text-purple-400 bg-purple-500/10",
  },
  {
    title: "Introducing Speaking Practice: Your AI Conversation Partner",
    excerpt: "We're excited to launch our new AI-powered speaking feature. Practice real-world conversations and get instant pronunciation feedback.",
    date: "Jan 28, 2026",
    category: "Product Update",
    categoryColor: "text-green-400 bg-green-500/10",
  },
  {
    title: "5 Tips to Build a Daily English Learning Habit",
    excerpt: "Consistency beats intensity when it comes to language learning. Here are practical strategies to make English practice a daily habit.",
    date: "Jan 15, 2026",
    category: "Tips & Tricks",
    categoryColor: "text-yellow-400 bg-yellow-500/10",
  },
  {
    title: "Zehnly AI Hits 30,000 Active Learners",
    excerpt: "A milestone worth celebrating! Thank you to our amazing community of learners from Uzbekistan, Russia, and beyond.",
    date: "Jan 5, 2026",
    category: "Company News",
    categoryColor: "text-purple-400 bg-purple-500/10",
  },
  {
    title: "The Power of Word Battle: Competitive Learning",
    excerpt: "Why competing against others is one of the most effective ways to learn vocabulary. A deep dive into our most popular game.",
    date: "Dec 20, 2025",
    category: "Learning Science",
    categoryColor: "text-purple-400 bg-purple-500/10",
  },
  {
    title: "From Zero to Conversational: A Learner's Journey",
    excerpt: "How Dilnoza went from knowing 50 English words to having confident conversations in just 4 months using Zehnly AI.",
    date: "Dec 8, 2025",
    category: "Success Story",
    categoryColor: "text-green-400 bg-green-500/10",
  },
];

export default function Blog() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-purple-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-purple-200/50">
            <span className="inline-flex bg-linear-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
              Blog
            </span>
          </div>
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-purple-200),var(--color-gray-50),var(--color-purple-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-jakarta text-3xl font-semibold text-transparent md:text-4xl mb-6">
            Insights & Updates
          </h1>
          <p className="text-lg text-purple-200/65 max-w-2xl mx-auto">
            Tips, product updates, and stories from the Zehnly AI team and our community of learners.
          </p>
        </div>

        {/* Blog posts */}
        <div className="space-y-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group p-6 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <span className={`inline-flex self-start text-xs font-medium px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                  {post.category}
                </span>
                <time className="text-xs text-purple-200/40">{post.date}</time>
              </div>
              <h2 className="font-jakarta text-lg font-semibold text-gray-200 mb-2 group-hover:text-purple-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-purple-200/65">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
