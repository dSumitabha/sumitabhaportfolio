"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiFillLock } from "react-icons/ai";
import { CiUnlock } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


export default function RepoPage() {
  const { repo } = useParams();
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepoData() {
      try {
        const response = await fetch(`/api/github/${repo}`);
        if (!response.ok) throw new Error("Failed to fetch repository data");
        const data = await response.json();
        setRepoData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (repo) fetchRepoData();
  }, [repo]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center p-6 text-red-500">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <div className="flex items-center space-x-4">
        <Image
          src={repoData.avatar}
          alt="Repo Owner Avatar"
          width={60}
          height={60}
          className="rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold">{repoData.name}
          {repoData.is_private ? <AiFillLock className="inline text-gray-500 ml-2" /> : <CiUnlock className="inline text-gray-500 ml-2" />}
          </h2>
          <p className="text-gray-600">{repoData.description || "No description available"}</p>
        </div>
      </div>
      <div className="mt-4">
        <p><strong>Visibility:</strong> {repoData.visibility}</p>
        <p><strong>Language:</strong> {repoData.language || "Unknown"}</p>
        <p><strong>Stars:</strong> {repoData.stars}</p>
        <p><strong>Forks:</strong> {repoData.forks}</p>
      </div>
      <div className="mt-4">
        <Link href={repoData.url} target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
          <FaGithub className="text-xl" /> View on GitHub
        </Link>
      </div>
    </div>
  );
}
