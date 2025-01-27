import { getProject, getProjectPaths } from '@/lib/sanity.utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

interface ProjectProps {
  project: {
    title: string
    year: string
    slug: string
    description: any
    images: {
      asset: {
        url: string
      }
    }[]
  }
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-8">{project.year}</p>
      <PortableText value={project.description} />
      <div className="grid grid-cols-2 gap-4 mt-8">
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image.asset.url}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getProjectPaths()
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)

  // Check if project is undefined
  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: { project },
    revalidate: 60, // Regenerate the page every 60 seconds
  }
}