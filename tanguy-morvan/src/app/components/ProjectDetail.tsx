'use client';
import { useEffect, useRef } from 'react';
import { Project } from '@/types/project';
import { urlFor } from '@/sanity/lib/image';
import ProjectList from './ProjectList';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  if (!project) return <p>Projet non trouvé</p>;

  const images = project.images || [];
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (carouselRef.current) {
        const scrollContainer = carouselRef.current;

        // Si le défilement est vertical (deltaY différent de 0)
        if (e.deltaY !== 0) {
          scrollContainer.scrollLeft += e.deltaY;
        }
      }
    };

    // Ajouter l'événement wheel
    window.addEventListener('wheel', handleWheel);

    // Nettoyer l'événement lorsqu'il n'est plus nécessaire
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="flex flex-wrap h-screen overflow-hidden">
      {/* Conteneur des images défilant horizontalement */}
      <div
        className="flex h-full overflow-x-scroll overflow-y-hidden w-full"
        ref={carouselRef}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-screen h-screen">
            <img
              src={urlFor(image.asset).url()}
              alt={`Image du projet ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* ProjectList s'affiche après le carrousel */}
      <div className="w-full h-full p-4 bg-gray-800">
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectDetail;
