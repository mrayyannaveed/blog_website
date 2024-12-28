import { type SchemaTypeDefinition } from 'sanity'
import about from './about'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, blog],
}
