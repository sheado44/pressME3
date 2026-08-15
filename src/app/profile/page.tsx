import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold shrink-0">
          JR
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-1">Jordan Reyes</h1>
          <p className="text-gray-400 mb-3">NFL & college football analyst • Chicago</p>
          <p className="text-gray-300 max-w-2xl mb-4">
            Former D-II offensive lineman turned film and data nerd. I write about the trenches, scheme evolution, and the numbers that actually matter.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-forge-900 border border-forge-800 rounded-lg px-4 py-2">
              <span className="text-forge-accent font-bold text-lg">#7</span>
              <span className="text-gray-400 ml-1">Sports Rank</span>
            </div>
            <div className="bg-forge-900 border border-forge-800 rounded-lg px-4 py-2">
              <span className="font-bold text-lg">28</span>
              <span className="text-gray-400 ml-1">Published</span>
            </div>
            <div className="bg-forge-900 border border-forge-800 rounded-lg px-4 py-2">
              <span className="font-bold text-lg">91.4</span>
              <span className="text-gray-400 ml-1">Avg AI Score</span>
            </div>
            <div className="bg-forge-900 border border-forge-800 rounded-lg px-4 py-2">
              <span className="font-bold text-lg">84k</span>
              <span className="text-gray-400 ml-1">Total Views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-forge-800 mb-6 text-sm font-medium">
        <button className="pb-3 border-b-2 border-forge-accent text-forge-accent">
          Published Articles
        </button>
        <button className="pb-3 text-gray-400 hover:text-white">About</button>
        <button className="pb-3 text-gray-400 hover:text-white">Stats</button>
      </div>

      {/* Articles */}
      <div className="space-y-4">
        <Link
          href="/article/1"
          className="block bg-forge-900 border border-forge-800 rounded-xl p-5 hover:border-forge-700 transition"
        >
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span className="text-forge-accent font-medium">#1 Ranked</span>
            <span>•</span>
            <span>NFL</span>
            <span>•</span>
            <span>AI 94</span>
            <span>•</span>
            <span>Aug 12, 2026</span>
          </div>
          <h2 className="text-lg font-bold mb-1">
            Why the Bears&apos; Offensive Line Is Quietly Elite in 2026
          </h2>
          <p className="text-gray-400 text-sm">12.4k views • 48 comments</p>
        </Link>

        <div className="bg-forge-900 border border-forge-800 rounded-xl p-5">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span className="bg-forge-700 px-2 py-0.5 rounded">#8</span>
            <span>•</span>
            <span>NFL</span>
            <span>•</span>
            <span>AI 90</span>
            <span>•</span>
            <span>Jul 28, 2026</span>
          </div>
          <h2 className="text-lg font-bold mb-1">
            The Evolution of Zone Blocking in the Modern NFL
          </h2>
          <p className="text-gray-400 text-sm">6.2k views • 22 comments</p>
        </div>
      </div>
    </main>
  );
}
