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
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
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
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",

        // WebApp Manifest Configuration
        appName: "boxshadow.co", // Inferred with your package.json
        appDescription: "Collection of CSS box shadows for your next project",
        developerName: "Luke Brown",
        developerURL: "https://lukebrown.io",
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        trackingUrl: "cdn.usefathom.com",
        siteId: process.env.FATHOM_SITE_ID,
        whitelistHostnames: ["boxshadow.co"],
      },
    },
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
