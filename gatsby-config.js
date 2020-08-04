module.exports = {
  siteMetadata: {
    title: `Nima Erfani`,
    description: `Nima Erfani. I'm a software engineering graduate from the University of Victoria. This is my online resume. Thanks for visiting!`,
    author: `Nima Erfani`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files`,
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
        display: `minimal-ui`,
        icon: `src/images/ne-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
