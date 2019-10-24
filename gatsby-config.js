module.exports = {
  siteMetadata: {
    title: `Technology Arts & Media Program`,
    description: `The philosophy of the TAM curriculum is to integrate creative production, critical thinking, and technical skills into each course`,
    author: `Brooke Stevens`,
  },
  proxy: {
    prefix: "/*",
    url: "http://dev-atlas-tam.pantheonsite.io/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },        
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://dev-atlas-tam.pantheonsite.io/`,
        apiBase: `jsonapi`, //default way drupal shows content
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tam-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
