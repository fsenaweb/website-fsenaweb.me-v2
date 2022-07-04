require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `fsenaweb.dev`,
    description: `Desenvolvimento de site, sistema para internet, aplicativos para internet e intranet, Progressive Web App (PWA), Single Page Application (SPA)`,
    author: `@fsenaweb`,
    keywords: [
      "desenvolvedor",
      "front-end",
      "frontend",
      "back-end",
      "backend",
      "vue",
      "react",
      "php",
      "javascript",
      "laravel",
      "sistemas web",
      "aplicativos",
      "site",
      "internet",
      "pwa",
      "spa",
      "landing page",
      "progressive web app",
      "Single Page Application",
      "codeigniter",
      "node",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100,300,400,700,900`,
          `source sans pro\:300,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "AW-1028449345",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Name of the event that is triggered
        // on every Gatsby route change.

        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        selfHostedOrigin: "https://www.googletagmanager.com",
      },
    },
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
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styled.js`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fsenaweb.dev - Matheus Ricelly`,
        short_name: `fsenaweb.dev`,
        description: `Desenvolvimento de site, sistema para internet, aplicativos para internet e intranet, Progressive Web App (PWA), Single Page Application (SPA)`,
        lang: `pt-br`,
        start_url: `/`,
        background_color: `#2f2b4a`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
