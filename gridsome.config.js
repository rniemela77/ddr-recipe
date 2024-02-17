module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        // from .env
        space: env.CONTENTFUL_SPACE_ID, // required
        accessToken: env.CONTENTFUL_ACCESS_TOKEN, // required
        typeName: 'Contentful'
      }
    }
  ]
}
