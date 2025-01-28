'use client';

import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { getAllProjects } from '@/lib/sanity.utils';

const AllProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  if (!projects.length) {
    return <p className="text-center mt-20">Chargement des projets...</p>;
  }

  // Configuration des colonnes selon la taille d'écran
  const breakpointColumnsObj = {
    default: 2, // Desktop
    1100: 2, // Tablettes
    768: 2, // Mobiles paysage
    500: 1, // Mobiles
  };

  return (
    <div className="">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex" // Masonry container
        columnClassName="flex flex-col" // Columns style
      >
        {projects.map((project) =>
          project.imageUrl.map((url: string, index: number) => (
            <div
              key={`${project._id}-${index}`}
              className="group relative cursor-pointer overflow-hidden"
            >
              <img
                src={url}
                alt={`Image du projet ${project.title}`}
                className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* Titre du projet (au hover) */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium">{project.title}</p>
              </div>
            </div>
          ))
        )}
      </Masonry>
    </div>
  );
};

export default AllProjects;
