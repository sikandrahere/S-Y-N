"use client";
import React, { useState, useEffect } from "react";
import { Tabs } from "@/components/ui/tabs";
import Politics from "@/components/Politics";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Confession from "@/components/Confession";
import Entertainment from "@/components/Entertainment";
import Unfiltered from "@/components/Unfiltered";

const TopicsPage = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/fetch-posts");
        if (!response.ok) {
          throw new Error("Failed to fetch the posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20">Error: {error}</div>;
  }

  const tabs = [
    {
      title: "Politics",
      value: "politics",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-black to-black border-2 border-gray-800">
          <TracingBeam className="px-6">
            <p>&quot; No judgement, just your voice on the issues &quot;</p>
            <div>
              <Politics posts={posts} />
            </div>
          </TracingBeam>
        </div>
      ),
    },
    {
      title: "Confession",
      value: "confession",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-black to-black border-2 border-gray-800">
          <TracingBeam className="px-6">
            <p>&quot; Here Your secrets are safe &quot;</p>
            <div>
              <Confession posts={posts} />
            </div>
          </TracingBeam>
        </div>
      ),
    },
    {
      title: "Entertainment",
      value: "entertainment",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-black to-black border-2 border-gray-800">
          <TracingBeam className="px-6">
            <p>&quot; Your entertainment, your safe space &quot;</p>
            <div>
              <Entertainment posts={posts} />
            </div>
          </TracingBeam>
        </div>
      ),
    },
    {
      title: "Unfiltered",
      value: "unfiltered",
      content: (
        <div className="w-full overflow-y-scroll scrollbar-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-black to-black border-2 border-gray-800">
          <TracingBeam className="px-6">
            <p>&quot; Your thoughts, your voice &quot;</p>
            <div>
              <Unfiltered posts={posts} />
            </div>
          </TracingBeam>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TopicsPage;