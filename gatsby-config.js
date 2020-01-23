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
