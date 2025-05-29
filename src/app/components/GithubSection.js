"use client"
import { useEffect, useState } from "react";
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const hardcodedRepos = ["quitter", "sumitabhaportfolio", "skyDrive","instaclone", "slack-clone", "clock"];

export default function GitHubSection() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const profileRes = await fetch("https://api.github.com/users/dSumitabha");
        const profileData = await profileRes.json();
        setProfile(profileData);

        const repoData = await Promise.all(
          hardcodedRepos.map(async (name) => {
            const res = await fetch(`https://api.github.com/repos/dSumitabha/${name}`);
            return await res.json();
          })
        );
        setRepos(repoData);
      } catch (err) {
        console.error("GitHub fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-12 px-4 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-4">GitHub Activity</h2>

        {loading ? (
          <div className="animate-pulse w-full text-center mb-10">
            <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded mx-auto mb-2" />
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded mx-auto" />
          </div>
        ) : profile ? (
          <div className="relative bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg px-6 py-8 max-w-3xl mx-auto mb-10 overflow-hidden">
            {/* GitHub Icon Background */}
            <FaGithub className="absolute top-4 right-4 text-gray-300 dark:text-gray-700 opacity-10 text-[120px] pointer-events-none" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{profile.login}</h3>
              {profile.bio && (
                <p className="text-md mt-2 text-gray-600 dark:text-gray-300">{profile.bio}</p>
              )}
              {profile.location && (
                <div className="flex justify-center items-center gap-2 mt-3 text-sm text-gray-500 dark:text-gray-400">
                  <FaMapMarkerAlt />
                  <span>{profile.location}</span>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{profile.public_repos} Repos</span>
                <span>•</span>
                <span>{profile.followers} Followers</span>
                <span>•</span>
                <span>Following {profile.following}</span>
              </div>
            </div>
          </div>
        ) : null}

        {/* Repo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-4 aspect-[1.67] flex flex-col justify-between rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 animate-pulse">
                  <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-3" />
                  <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded mb-1" />
                  <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded" />
                </div>
              ))
            : repos.map((repo) => (
                <div key={repo.id} className="p-5 aspect-[1.67] flex flex-col justify-between rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition hover:shadow-md">
                  <h4 className="text-lg font-semibold">{repo.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">{repo.description || "No description provided."}</p>
                  <div className="text-xs text-gray-500 flex justify-between items-center float-bottom">
                    <span>{repo.language || "N/A"}</span>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                      View on GitHub →
                    </a>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
