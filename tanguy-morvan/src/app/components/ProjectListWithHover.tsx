'use client';

import { useState } from 'react';
import { urlFor } from '@/sanity/lib/image';
import { Project } from '@/types/project';
import Link from 'next/link';

export default function ProjectListWithHover({ projects }: { projects: Project[] }) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div className="ml-auto w-1/3 flex flex-col relative">
      {/* Images Preview */}
      <div className="w-full mb-4 h-40 flex justify-center items-center">
      {hoveredImage && (
          <img
            src={hoveredImage}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 scale-100"
          />
        )}
      </div>

      {/* Project List */}
      <ul className="text-sm leading-tight">
        {projects.map((project: Project) => (
          <li
            key={project.slug.current}
            className="cursor-pointer hover:font-bold transition flex justify-between mb-2"
            onMouseEnter={() =>
              setHoveredImage(
                project.images?.[0] ? urlFor(project.images[1].asset).url() : null
              )
            }
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Link
              href={`/projects/${project.slug.current}`}
              className="flex justify-between w-full"
            >
              <span className="text-left">{project.title}</span>
              <span className="text-right">{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
