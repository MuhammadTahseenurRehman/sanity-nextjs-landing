export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fd0c0d144ae86f2dd33dcfc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-studio-pqtmtewm',
                  apiId: 'a7f57032-cb5b-4f31-9212-29e27c70b16b'
                },
                {
                  buildHookId: '5fd0c0d13c8746f5026c54cb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-web-dwkqpk6m',
                  apiId: '67651ae7-8ad2-4505-ab2b-dc5cf456bc25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MuhammadTahseenurRehman/sanity-nextjs-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-web-dwkqpk6m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
