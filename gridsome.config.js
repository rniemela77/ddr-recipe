module.exports = {
  templates: {
    // ContentfulRecipe: '/recipe/:slug'
    ContentfulRecipe: [
      {
        path: '/recipe/:slug',
        component: './src/templates/Recipe.vue'
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE, // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        typeName: 'Contentful',
        // host: 'cdn.contentful.com', // ?
        // environment: 'master', // ?
      }
    }
  ]
}