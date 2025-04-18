"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import PostCard from "@/utils/PostCard";

const Explore = () => {
  const [post, setPost] = useState(null); 
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
        setPost(data); 
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
  console.log("Post of the day:", post[0]); // Log the fetched post

  return (
    <div className="mt-20">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
        >
          <h1 className="text-4xl font-bold">Post of the Day</h1>

          {post && <PostCard post={post[0]} />}
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default Explore;