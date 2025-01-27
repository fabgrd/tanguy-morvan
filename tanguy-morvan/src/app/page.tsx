// tanguy-morvan/src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProjectList from './projects/projectList';

export default function Home() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsContentVisible(true);
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-between bg-red-600 text-white font-antiquelegacy">
      {/* Header */}
      <header
        className="px-10 py-5 flex justify-between items-start transition-opacity duration-700"
      >
        <Link href="/profile" className="text-white text-sm font-light italic">
          Tanguy Morvan
        </Link>
        <h1 className="text-8xl flex items-center leading-none">
          <span className="">Design</span>
          <span className="mx-3 text-3xl font-thin">+</span>
          <span className="">Images</span>
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-grow relative">
        {/* Image above the list */}
        <div
          className={`absolute right-10 top-10 w-[300px] h-[400px] bg-gray-300 flex justify-center items-center transition-opacity duration-700 ${
            isContentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-black text-lg font-bold">Image Placeholder</span>
        </div>
      </main>

      {/* Project List */}
      <footer className="px-10 py-5">
        {/* <ProjectList /> */}

        {/* Footer */}
        <Link href="/all" className="text-white text-sm font-medium">
          All
        </Link>
      </footer>
    </div>
  );
}