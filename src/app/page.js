"use client";
import React, { useState, useEffect } from "react";
import HeroSection1 from "@/components/HeroSection1";
import InfiniteMovingText from "@/components/InfiniteMovingText";
import SharedWhispers from "@/components/SharedWhispers";

export default function Home() {
  const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await fetch("/api/fetch-posts");
          if (!response.ok) {
            throw new Error("Failed to fetch the post");
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
  
      fetchPost();
    }, []);
  
    if (loading) {
      return <div className="text-center mt-20">Loading...</div>;
    }
  
    if (error) {
      return <div className="text-center mt-20">Error: {error}</div>;
    }
  return (
    <>
    <HeroSection1/>
    <InfiniteMovingText/>
    <SharedWhispers posts={posts}/>
    </>
  );
}
