import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export async function getProject(slug: string) {
    
  const query = groq`
    *[_type == "project" && slug.current == $slug][0] {
      title,
      year,
      slug,
      description,
      images[] {
        asset->
      }
    }
  `
  console.log('Fetching project with slug:', slug)
  const project = await client.fetch(query, { slug })
  console.log('Fetched project:', project)
  return project
}

export async function getProjectPaths() {
  const query = groq`
    *[_type == "project"] {
      "slug": slug.current
    }
  `
  console.log('Fetching project paths')
  const paths = await client.fetch(query)
  console.log('Fetched paths:', paths)
  return paths.map((path: { slug: string }) => ({
    params: { slug: path.slug },
  }))
}
const project = await getProject('notes-on-rooms-and-gardening')
console.log("--------PROJET : ", project)