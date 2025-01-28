// src/app/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import { Project } from '@/types/project';
import ProjectDetail from './../components/ProjectDetail';

export const generateStaticParams = async () => {
  const query = `*[_type == "project"] {
    "slug": slug.current
  }`;
  const projects = await client.fetch(query);

  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const query = `*[_type == "project" && slug.current == '${slug}'][0]`;
  const project = await client.fetch(query);

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return <ProjectDetail project={project} />;
}
