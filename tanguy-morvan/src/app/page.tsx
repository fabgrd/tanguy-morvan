"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  { title: "Notes on Rooms and Gardening", year: 2024 },
  { title: "Twenty-First Century Trends in Design", year: 2024 },
  { title: "Deploying the Vision", year: 2024 },
  { title: "LVMH Watch Week 2024", year: 2025 },
  { title: "CUDIS RING 002", year: 2025 },
  { title: "CHANEL 31 LE ROUGE", year: 2024 },
  { title: "ECAL Photography Soft Photography", year: "2024–2025" },
  { title: "EPFLCM Visual Identity and Editorial Design", year: 2025 },
  { title: "Optometric Vision Therapy", year: 2024 },
  { title: "Area X: Invisible Structures", year: "2023–2024" },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="h-screen flex flex-col justify-between bg-red-600 text-white font-antiquelegacy">
      {/* En-tête */}
      <header className="px-10 py-5 flex justify-between items-start">
        <Link href="/profile" className="text-white text-sm font-light italic">
          Tanguy Morvan
        </Link>
        <h1 className="text-8xl flex items-center leading-none">
          <span className="">Design</span>
          <span className="mx-3 text-3xl font-thin">+</span>
          <span className="font-light">Images</span>
        </h1>
      </header>

      {/* Contenu principal */}
      <main className="flex flex-grow relative">
        {/* Image au-dessus de la liste */}
        <div className="absolute right-10 top-10 w-[300px] h-[400px] bg-gray-300 flex justify-center items-center">
          {hoveredIndex !== null ? (
            <span className="text-black text-lg font-bold">Image Placeholder</span>
          ) : (
            <span className="text-black text-sm font-light italic">Hover to see image</span>
          )}
        </div>
      </main>

      {/* Liste des projets */}
      <footer className="px-10 py-5">
        <div className="ml-auto w-1/3 flex flex-col">
          <ul className="text-sm leading-tight">
            {projects.map((project, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-gray-300 transition flex justify-between`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className={`text-left ${index % 2 === 0 ? "font-medium" : "font-light"}`}>
                  {project.title}
                </span>
                <span
                  className={`text-right ${
                    index % 2 === 0 ? "text-gray-400 font-thin" : "text-gray-500 font-light italic"
                  }`}
                >
                  {project.year}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pied de page */}
        <Link href="/all" className="text-white text-sm font-medium">
          All
        </Link>
      </footer>
    </div>
  );
}
