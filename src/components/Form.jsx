"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Toaster, toast } from "sonner";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const Form = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [hashtags, setHashtags] = useState("");

  // Load the name from localStorage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem("anonymousName");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to the server
      const response = await fetch("/api/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          content,
          hashtags: hashtags.split(",").map((tag) => tag.trim()), // Convert hashtags string to array
        }),
      });

      if (response.ok) {
        toast.success("Post created successfully!");
        setName(""); 
        setContent(""); 
        setHashtags(""); 
      } else {
        const errorData = await response.json();
        console.error("Error creating post:", errorData.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black mt-30">
      <Toaster position="top-center" closeButton={false} />
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Share your thoughts
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Your thoughts will be shared anonymously.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* Anonymous Name Field */}
        <LabelInputContainer>
          <label htmlFor="name">Your Anonymous Name</label>
          <Input
            id="name"
            placeholder="Anonymous"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </LabelInputContainer>

        {/* Content Field */}
        <LabelInputContainer className="mb-4">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Share your thoughts"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="h-20 border border-gray-300 p-2 rounded-md"
          />
        </LabelInputContainer>

        {/* Hashtags Field */}
        <LabelInputContainer className="mb-4">
          <label htmlFor="hashtags">Suitable Hashtag For Your Post</label>
          <Input
            id="hashtags"
            placeholder="#politics, #confession, #entertainment, #unfiltered"
            type="text"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            required
          />
        </LabelInputContainer>

        {/* Submit Button */}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Post your thoughts &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

export default Form;