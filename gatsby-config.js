module.exports = {
  siteMetadata: {
    title: `Yo! I'm Paulie Rodriguez`,
    titleTemplate: "Paulie and Knuckles",
    description: `Coffee powered UX Designer and Developer`,
    twitterUsername: `@Paulie_dev`,
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
        icon: `src/images/cowboyBlob.png`,
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
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     develop: true,
    //     tailwind: true,
    //     // whitelistPatternsChildren: [/^markdown$/],
    //     // whitelist: ['h1'],
    //     ignore:[`src/css/markdown.css`, `src/css/style.css`],
    //     // purgeOnly: [`src/css/style.css`],
    //     content: [`${__dirname}/src/**/*.{ts,js,jsx,tsx,md,mdx}`, ]
    //   },
    // },
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
          `josefin sans`,
          `yeseva one`,
          `vollkorn\:600i, 700i, 800i, 900i,`,
        ],
        display: "swap",
      },
    },
  ],
};
