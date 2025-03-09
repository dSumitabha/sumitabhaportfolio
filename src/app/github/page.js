"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLock, AiOutlineLock } from "react-icons/ai";
import { CiUnlock } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("/api/github");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  if (loading) {
    return <div className="text-center p-6">Loading...</div>;
  }

  // Destructure data for better readability
  const { avatar, username, followers, following, repositories } = userData;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <Image
          src={avatar}
          alt="GitHub Avatar"
          width={80}
          height={80}
          className="rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold">{username}</h2>
          <p className="text-gray-600">
            Followers: {followers} | Following: {following}
          </p>
        </div>
      </div>

      
      <h3 className="text-xl font-semibold mt-6 mb-4">Repositories</h3>
      <ul className="space-y-4">
        {repositories.map(({ name, is_private, url, api_url, description, language }) => (
          <li key={name} className="p-4 border rounded-lg shadow-sm bg-gray-50 space-y-2">
            <h4 className="text-lg font-semibold text-blue-600 ">
              <Link href={api_url} >
                {name}
              </Link>
              {is_private ? (
                <AiFillLock className="inline ml-2 text-gray-600" />
                ) : (
                <CiUnlock className="inline ml-2 text-gray-600" />
                )}
            </h4>
            <p className="text-sm text-gray-600">
              {description ? description : "No description available"}
            </p>
            <p className="text-sm text-gray-500">Language: {language}</p>
           
            <Link href={url} target="_blank" className="text-blue-700">
                Open in Github <FaGithub className="inline"/> 
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
