import { createClient } from 'next-sanity'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { apiVersion, dataset, projectId } from '../env'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client)
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}