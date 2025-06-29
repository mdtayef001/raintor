// components/StartProjectButton.tsx
"use client";
import { TfiArrowRight } from "react-icons/tfi";

export default function Button() {
  return (
    <button
      className="flex items-center justify-center  dark:text-white dark:border-white
        rounded-full 
        border border-black 
        p-1 
        font-serif 
        text-black 
        cursor-pointer
      "
    >
      {/* Icon Container: The circle with its own border */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black dark:border-white">
        {/* The Arrow SVG Icon */}
        <TfiArrowRight />
      </div>

      {/* The Text */}
      <span className="mx-4 text-xl font-medium">Start Project</span>
    </button>
  );
}
