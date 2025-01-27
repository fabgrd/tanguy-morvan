import { getProjectPaths, getProject } from '@/lib/sanity.utils'
import { Project } from '@/types/project'
import Link from 'next/link'

export default async function ProjectList() {
  const projectPaths = await getProjectPaths();
  const projects = await Promise.all(
    projectPaths.map(async (path: { params: { slug: string } }) => {
      return getProject(path.params.slug);
    })
  );

  return (
    <div className="ml-auto w-1/3 flex flex-col">
      <h1 className="text-xl font-bold mb-4">Projects</h1>
      <ul className="text-sm leading-tight">
        {projects.map((project: Project) => (
          <li
            key={project.slug.current}
            className="cursor-pointer hover:font-bold transition flex justify-between mb-2"
          >
            <Link href={`/projects/${project.slug.current}`} className="flex justify-between w-full">
              <span className="text-left">{project.title}</span>
              <span className="text-right">{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}