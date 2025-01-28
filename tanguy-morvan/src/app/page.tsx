// tanguy-morvan/src/app/page.tsx
"use client";
export const dynamic = "force-dynamic"; 

import { useState, useEffect } from "react";
import Link from "next/link";
// import ProjectList from '../lib/projectList';
import ProjectList from './components/ProjectList';

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

      {/* Project List */}
      <footer className={`px-10 py-5 ${isContentVisible ? "opacity-100" : "opacity-0"
        }`}>
        <ProjectList />

        {/* Footer */}
        <Link href="/all" className="text-white text-sm font-medium">
          All
        </Link>
      </footer>
    </div>
  );
}