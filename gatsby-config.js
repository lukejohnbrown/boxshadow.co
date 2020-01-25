require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options:
        {
          path: `./src/data/`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:
        {
          path: `./src/images/`,
        },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Hind`,
            variants: [`400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        // enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    }
    // {
    //   resolve: `gatsby-plugin-graphql-codegen`,
    //   options: {
    //     fileName: `src/types/graphql.ts`,
    //     codegen: true,
    //     codegenDelay: 250,
    //   }
    // }
  ],
}
