import { client } from '@/sanity/lib/client';
import { Project } from '@/types/project';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  if (!project) return <p>Projet non trouvé</p>;

  return (
    <div>
      <h1>{project.title}</h1>
      {/* Affichez les détails du projet ici */}
    </div>
  );
};

// Remplace getStaticPaths par generateStaticParams
export const generateStaticParams = async () => {
  const query = `*[_type == "project"] {
    "slug": slug.current
  }`;
  const projects = await client.fetch(query);
  console.log('----------Projects:', projects);

  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
};

// Utilise la fonction du composant pour récupérer les données
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log('$$$$$$$$$$$Slug:', slug);

  const query = `*[_type == "project" && slug.current == '${slug}'][0]`;
  const project = await client.fetch(query);

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return <ProjectPage project={project} />;
}
