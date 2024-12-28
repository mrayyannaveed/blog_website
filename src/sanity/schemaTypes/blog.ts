export default {
    name: 'blog',
    type: 'document',
    title: 'Blogs',
    fields: [
        {
            name: 'category',
            type: 'string',
            title: 'Category'
        },
        {
            name: 'date',
            type: 'string',
            title: 'Date'
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'desc',
            type: 'string',
            title: 'Description'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: (input: string) => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
        },
    ]
}