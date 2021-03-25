export default {
  widgets: [
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
                  buildHookId: '605cbe76cb907b63883c2626',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-qvohuoar',
                  apiId: 'b81e6872-a1ca-4721-a71e-bfe8dd3ecb1d'
                },
                {
                  buildHookId: '605cbe76ed9ffd5b776622f2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-mah4xvvi',
                  apiId: 'c3c868df-4abc-45a7-ae1e-bce69f59eba4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erdenedavaa/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-mah4xvvi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
