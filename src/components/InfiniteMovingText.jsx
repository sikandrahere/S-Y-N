"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const InfiniteMovingText = () => {
    const testimonials = [
        {
          text:
          `" FREEDOM OF EXPRESSION "`,
        },
        {
          text:
           `" PRIVACY FIRST "`
        },
        {
          text:
          `" Over 10,000 voices shared anonymously "`
        },
        {
          text:
          `" A trusted space for open communication "`
        },
      ];
  return (
    <div className="h-[40vh] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default InfiniteMovingText