'use client';

import { useEffect, useState } from 'react';
import { getProjectPaths, getProject } from '@/lib/sanity.utils';
import { Project } from '@/types/project';
import ProjectListWithHover from './ProjectListWithHover';

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectPaths = await getProjectPaths();
        const projectsData = await Promise.all(
          projectPaths.map(async (path: { params: { slug: string } }) => {
            return getProject(path.params.slug);
          })
        );
        setProjects(projectsData);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return <ProjectListWithHover projects={projects} />;
}
