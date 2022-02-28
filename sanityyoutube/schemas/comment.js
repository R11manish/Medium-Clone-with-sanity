export default {
  name: 'comment',
  type: 'document',
  titles: 'Comment',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      desciption: `Comments won't show on the site without approvel`,
    },
    {
      name: 'email',
      type: 'string',
    },
    { name: 'comment', type: 'text' },
    {
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
  ],
}
