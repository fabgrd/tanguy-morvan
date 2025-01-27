'use client';

import { useState, useEffect } from 'react';
import { getProjectPaths, getProject } from '@/lib/sanity.utils';
import { urlFor } from '@/sanity/lib/image';
import { Project } from '@/types/project';
import Link from 'next/link';

export default async function ProjectList() {
  const projectPaths = await getProjectPaths();
  const projects = await Promise.all(
    projectPaths.map(async (path: { params: { slug: string } }) => {
      return getProject(path.params.slug);
    })
  );

  return <ProjectListWithHover projects={projects} />;
}

function ProjectListWithHover({ projects }: { projects: Project[] }) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    console.log('Component rendered');
  }, []);

  const handleMouseEnter = (imageUrl: string | null) => {
    console.log('hoveredImage', imageUrl);
    setHoveredImage(imageUrl);
  };

  const handleMouseLeave = () => {
    console.log('hoveredImage', null);
    setHoveredImage(null);
  };


  return (
    <div className="ml-auto w-1/3 flex flex-col relative">
      {/* Section pour afficher l'image et le texte */}
      {hoveredImage && (
        <div className="absolute top-16 left-0 w-full h-32 flex flex-col justify-center items-center">
          <p className="text-white text-3xl font-bold">Preview</p>
          <img
            src={hoveredImage}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      <ul className="text-sm leading-tight">
        {projects.map((project: Project) => (
          <li
            key={project.slug.current}
            className="cursor-pointer hover:font-bold transition flex justify-between mb-2"
            onMouseEnter={() => handleMouseEnter(project.images?.[0] ? urlFor(project.images[0].asset).url() : null)}
            onMouseLeave={handleMouseLeave}
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
