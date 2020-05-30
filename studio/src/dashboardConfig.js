export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed25a157ee67ee70abfe4b0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1phpxhqk',
                  apiId: '2a747bbc-2549-48a7-892e-0279c95362d0'
                },
                {
                  buildHookId: '5ed25a1687e8c731ec3a88dc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mi2jtzyx',
                  apiId: 'bf37c33a-91da-4b6f-b0a6-1258e3a76dd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NicolaSansom/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mi2jtzyx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
