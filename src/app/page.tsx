import Link from "next/link";

const sampleArticles = [
  {
    id: "1",
    rank: 1,
    section: "Sports",
    sport: "NFL",
    aiScore: 94,
    title: "Why the Bears' Offensive Line Is Quietly Elite in 2026",
    excerpt: "A deep dive into the advanced metrics that show Chicago's front is no longer a liability — and what it means for Caleb Williams' second year.",
    author: "Jordan Reyes",
    authorInitials: "JR",
    authorColor: "bg-blue-600",
    views: "12.4k",
    comments: 48,
    publisherRank: 7,
    emoji: "🏈",
  },
  {
    id: "2",
    rank: 2,
    section: "Sports",
    sport: "NBA",
    aiScore: 91,
    title: "The Quiet Revolution in NBA Load Management",
    excerpt: "Teams are using real-time biometric data differently in 2026. Here's what the numbers actually show about rest vs. rhythm.",
    author: "Aisha Lane",
    authorInitials: "AL",
    authorColor: "bg-purple-600",
    views: "9.8k",
    comments: 36,
    publisherRank: 12,
    emoji: "🏀",
  },
  {
    id: "3",
    rank: 1,
    section: "Pop Culture",
    sport: "Music",
    aiScore: 89,
    title: "Why 2026 Touring Is Breaking the Old Festival Model",
    excerpt: "Artists are skipping the big multi-day festivals in favor of their own controlled experiences. The data shows fans are following.",
    author: "Maya Chen",
    authorInitials: "MC",
    authorColor: "bg-pink-600",
    views: "8.1k",
    comments: 52,
    publisherRank: 5,
    emoji: "🎵",
  },
  {
    id: "4",
    rank: 3,
    section: "Sports",
    sport: "Soccer",
    aiScore: 87,
    title: "MLS Attendance Is Surging — But Not Where You Think",
    excerpt: "Secondary markets and midweek games are driving unexpected growth. The data challenges the big-market narrative.",
    author: "Tom Keller",
    authorInitials: "TK",
    authorColor: "bg-green-600",
    views: "7.1k",
    comments: 29,
    publisherRank: 19,
    emoji: "⚽",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <header className="max-w-6xl mx-auto px-4 pt-8 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Ranked Writing by the Public</h1>
        <p className="text-xl text-forge-accent font-medium mb-2 italic">
          “We don’t make sports fun. You do!”
        </p>
        <p className="text-gray-400 mb-6">
          Public articles reviewed by AI for authenticity, accuracy & form. Ranked by quality and engagement.
        </p>

        {/* Section switcher */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button className="px-4 py-1.5 rounded-full bg-forge-accent text-white text-sm font-medium">
            All
          </button>
          <button className="px-4 py-1.5 rounded-full bg-forge-800 hover:bg-forge-700 text-sm transition">
            Sports
          </button>
          <button className="px-4 py-1.5 rounded-full bg-forge-800 hover:bg-forge-700 text-sm transition">
            Pop Culture
          </button>
        </div>

        <div className="flex gap-4 text-sm">
          <button className="font-medium text-forge-accent border-b-2 border-forge-accent pb-1">
            Top Ranked
          </button>
          <button className="text-gray-400 hover:text-white pb-1">Newest</button>
          <button className="text-gray-400 hover:text-white pb-1">Rising</button>
        </div>
      </header>

      {/* Feed */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid gap-6">
          {sampleArticles.map((article) => (
            <article
              key={article.id}
              className="bg-forge-900 border border-forge-800 rounded-xl p-5 transition duration-200 hover:border-forge-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <span className="bg-forge-accent/20 text-forge-accent px-2 py-0.5 rounded font-medium">
                      #{article.rank} {article.section}
                    </span>
                    <span>•</span>
                    <span>{article.sport}</span>
                    <span>•</span>
                    <span>AI Score: {article.aiScore}</span>
                  </div>
                  <Link href={`/article/${article.id}`} className="block">
                    <h2 className="text-xl font-bold mb-2 hover:text-forge-accent transition">
                      {article.title}
                    </h2>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
                  </Link>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Link href="/profile" className="flex items-center gap-2 hover:text-white">
                      <div
                        className={`w-6 h-6 rounded-full ${article.authorColor} flex items-center justify-center text-xs font-bold`}
                      >
                        {article.authorInitials}
                      </div>
                      <span>{article.author}</span>
                    </Link>
                    <span>{article.views} views</span>
                    <span>{article.comments} comments</span>
                    <span className="text-forge-accent">Publisher Rank #{article.publisherRank}</span>
                  </div>
                </div>
                <div className="hidden sm:block w-32 h-24 rounded-lg bg-forge-800 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-orange-600/40 to-blue-900/40 flex items-center justify-center text-3xl">
                    {article.emoji}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-2.5 bg-forge-800 hover:bg-forge-700 rounded-lg text-sm font-medium transition">
            Load More Articles
          </button>
        </div>
      </div>
    </main>
  );
}
