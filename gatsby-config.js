module.exports = {
  siteMetadata: {
    title: 'Planning Center API App',
    description: 'Front-end templates built for v2.0 of our API app',
    author: '@planningcenter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'planning-center-api-app',
        short_name: 'pco_api',
        start_url: '/'
      },
    }
  ],
}
