"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar"
import PostCard from "@/utils/PostCard";


const SharedWhispers = ({posts}) => {
  const content = [
    {
      title: "Breaking Boundaries",
      description: "Dive into the world of anonymous sharing. Explore ideas and opinions beyond traditional limits and embrace the power of expression without barriers.",
      content: (
        <PostCard post={posts[0]}/>
      ),
    },
    {
      title: "Voices Unheard",
      description: "Provide a platform for thoughts that go unnoticed. Share your ideas freely and make an impact anonymously.",
      content: (
        <PostCard post={posts[2]}/>
      ),
    },
    {
      title: "The Power of Anonymity",
      description: "Find courage in anonymity and speak your mind without fear of judgment. Your voice matters, even without a name.",
      content: (
        <PostCard post={posts[1]}/>
      ),
    },
  ];
  return (
    <div className="w-full py-4">
      <h1 className="text-2xl font-bold text-center">"Shared Whispers"</h1>
      <StickyScroll content={content} />
    </div>
  )
}

export default SharedWhispers