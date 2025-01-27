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
      {hoveredImage && (
        <div className="absolute bottom-full left-0 flex">
          <img
            src={hoveredImage}
            alt="Preview"
            className="max-w-full max-h-60 object-contain transition-transform duration-300"
          />
        </div>
      )}

      {/* Project List */}
      <ul className="text-lg leading-tight">
        {projects.map((project: Project, index: number) => (
          <li
            key={project.slug.current}
            className="cursor-pointer hover:font-bold transition flex justify-between"
            onMouseEnter={() =>
              setHoveredImage(
                project.images?.[0] ? urlFor(project.images[0].asset).url() : null
              )
            }
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Link
              href={`/projects/${project.slug.current}`}
              className="flex justify-between w-full"
            >
              <span className="text-left">{index + 1}. {project.title}</span>
              <span className="text-right">{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
