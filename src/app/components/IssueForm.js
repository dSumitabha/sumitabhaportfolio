"use client";

import { useState } from "react";

export default function IssueForm({ repo }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(`/api/github/${repo}/issues`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body })
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to create issue");
      
      setSuccess(`Issue created: `);
      setTitle("");
      setBody("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-sky-100 p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold mb-2">Create a New Issue</h3>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <input type="text" placeholder="Issue Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded mb-2" required />
      <textarea placeholder="Issue Description" value={body} onChange={(e) => setBody(e.target.value)} className="w-full p-2 border rounded mb-2" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={loading} >
        {loading ? "Submitting..." : "Submit Issue"}
      </button>
    </form>
  );
}
