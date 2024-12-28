export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
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
            name: 'views',
            type: 'string',
            title: 'Views'
        },
        {
            name: 'comments',
            type: 'number',
            title: 'Comments'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            }
        },
    ]
}