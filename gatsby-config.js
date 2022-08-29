module.exports = {
  siteMetadata: {
    title: `React for Designers`,
    description: `The site is build to learn, practice, and upgrade my skill. Here I have used React, Gatsbyjs frameworks, Contentful CMS, and  Stripe payment systems.`,
    keywords: `React, React for Designers, Gatsbyjs, Contentful CMS, websites development, landing page`,
    author: `@Imtiajul_Islam`,
    siteUrl: `https://iimtiajul.ml/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3jn36rtjnc83`,
        accessToken: `xRZ3IcPi5mIxp6t1to2_TKqEEHCMblIs3YPP3riiSxg`
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
