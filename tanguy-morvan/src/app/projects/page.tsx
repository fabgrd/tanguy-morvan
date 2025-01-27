import { getProjectPaths, getProject } from '@/lib/sanity.utils'
import { Project } from '@/types/project'

export const generateStaticParams = async () => {
    const paths = await getProjectPaths()
    console.log('Generated paths:', paths)
  
    // Check if paths is empty
    if (paths.length === 0) {
      return []
    }
  
    return paths.map((path: { slug: string }) => ({
      slug: path.slug,
    }))
  }

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug)
  console.log('Fetched project metadata:', project)
  return {
    title: project.title,
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  console.log('Fetched project data:', project)
  return (
    <div>
      <h1>{project.title}</h1>
      {/* Add more details about the project */}
    </div>
  )
}