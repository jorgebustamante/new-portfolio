module.exports = {
  siteMetadata: {
    title: `Yo! I'm Paulie Rodriguez`,
    titleTemplate: "Paulie and Knuckles",
    description: `Coffee powered UX Designer and Developer`,
    url: `https://paulierodriguez.dev`,
    image: "/images/OgImageGrid.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        withWebp: true,
      },
    },
    "gatsby-plugin-eslint",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/logopr.png`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`postcss-nesting`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cases`,
        path: `${__dirname}/src/case-studies/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `caseImages`,
        path: `${__dirname}/src/case-studies/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `karla\:,400,400i,700,700i`,
                ],
        display: "swap",
      },
    },
    `gatsby-plugin-preload-fonts`,
       {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          analyzerPort: 3000,
          //only set this to true in local builds, not deployment prod builds
          production: false,
        },
      },
      'gatsby-plugin-remove-serviceworker',
  ],
};
