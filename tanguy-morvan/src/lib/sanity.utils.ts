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
  const project = await client.fetch(query, { slug })
  return project
} 

export async function getProjectPaths() {
  const query = groq`
    *[_type == "project"] {
      "slug": slug.current
    }
  `
  const paths = await client.fetch(query)
  return paths.map((path: { slug: string }) => ({
    params: { slug: path.slug },
  }))
}