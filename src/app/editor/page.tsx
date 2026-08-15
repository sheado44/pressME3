"use client";

import { useState } from "react";

export default function EditorPage() {
  const [showReview, setShowReview] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Create Article</h1>
        <p className="text-forge-accent italic text-sm mb-1">
          “We don’t make sports fun. You do!”
        </p>
        <p className="text-gray-400 text-sm">
          Use the tools below to design a unique visual piece. AI will review authenticity, accuracy, and form after you submit.
        </p>
      </div>

      {/* Meta */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a clear, specific title..."
            className="w-full bg-forge-900 border border-forge-700 rounded-lg px-4 py-2.5 focus:border-forge-accent focus:ring-1 focus:ring-forge-accent outline-none transition"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Section</label>
          <select className="w-full bg-forge-900 border border-forge-700 rounded-lg px-4 py-2.5 focus:border-forge-accent outline-none">
            <option>Sports – NFL</option>
            <option>Sports – NBA</option>
            <option>Sports – MLB</option>
            <option>Sports – Soccer</option>
            <option>Sports – College</option>
            <option>Pop Culture – Music</option>
            <option>Pop Culture – Film & TV</option>
            <option>Pop Culture – Other</option>
          </select>
        </div>
      </div>

      {/* Simple toolbar */}
      <div className="bg-forge-900 border border-forge-800 rounded-t-xl p-2 flex flex-wrap gap-1">
        <button className="px-3 py-1.5 rounded hover:bg-forge-700 text-sm font-bold">B</button>
        <button className="px-3 py-1.5 rounded hover:bg-forge-700 text-sm italic">I</button>
        <button className="px-3 py-1.5 rounded hover:bg-forge-700 text-sm">H2</button>
        <button className="px-3 py-1.5 rounded hover:bg-forge-700 text-sm">Link</button>
        <button className="px-3 py-1.5 rounded hover:bg-forge-700 text-sm">Image</button>
        <button className="px-3 py-1.5 rounded hover:bg-forge-700 text-sm">Stat Block</button>
        <button className="px-3 py-1.5 rounded hover:bg-forge-700 text-sm">Quote</button>
      </div>

      {/* Editor area */}
      <div
        contentEditable
        suppressContentEditableWarning
        className="bg-forge-900 border border-t-0 border-forge-800 rounded-b-xl min-h-[380px] p-6 text-gray-200 leading-relaxed focus:outline-none focus:border-forge-accent"
      >
        <p>Start writing your article here...</p>
        <p className="text-gray-500 mt-4">
          You can use the toolbar for formatting. This is a simplified rich editor for the prototype.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <span className="text-gray-500">Quick inserts:</span>
        <button className="text-forge-accent hover:underline">+ Box Score</button>
        <button className="text-forge-accent hover:underline">+ Player Card</button>
        <button className="text-forge-accent hover:underline">+ Timeline</button>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-3">
        <button className="px-4 py-2 text-sm bg-forge-800 hover:bg-forge-700 rounded-lg transition">
          Save Draft
        </button>
        <button
          onClick={() => setShowReview(true)}
          className="px-4 py-2 text-sm bg-forge-accent hover:bg-forge-accentHover rounded-lg font-medium transition"
        >
          Submit for AI Review
        </button>
      </div>

      {/* Simulated AI Review */}
      {showReview && (
        <div className="mt-8 bg-forge-900 border border-forge-700 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            🤖 AI Review Result
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-forge-800 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-400">92</div>
              <div className="text-xs text-gray-400">Authenticity</div>
            </div>
            <div className="bg-forge-800 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-400">88</div>
              <div className="text-xs text-gray-400">Accuracy</div>
            </div>
            <div className="bg-forge-800 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-400">95</div>
              <div className="text-xs text-gray-400">Form</div>
            </div>
          </div>
          <p className="text-green-400 font-medium mb-2">✓ Passed – Ready to publish</p>
          <p className="text-sm text-gray-400">
            Overall score: 91. Strong originality signals, solid factual grounding, excellent structure and readability.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="bg-forge-accent hover:bg-forge-accentHover px-4 py-2 rounded-lg text-sm font-medium transition">
              Publish Now
            </button>
            <button
              onClick={() => setShowReview(false)}
              className="bg-forge-800 hover:bg-forge-700 px-4 py-2 rounded-lg text-sm transition"
            >
              Edit Further
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
