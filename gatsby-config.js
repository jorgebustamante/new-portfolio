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
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "fonts",
    //     path: `${__dirname}/src/fonts/`
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `karla\:,400,400i,700,700i`,
          `yeseva one`,
                ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: "Air",
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-firebase",  
      options: {         
       features: {          
       auth: false,       
       database: false,  
       firestore: false,
       storage: false,    
       messaging: false, 
       functions: false,  
       performance: false, 
       analytics:true,
          },
          credentials: {
            apiKey: "AIzaSyB5IDfLbpHR6IfTEXDaqKpksVpb6msJFaI",
            authDomain: "paulierodriguez-dev.firebaseapp.com",
            databaseURL: "https://paulierodriguez-dev.firebaseio.com",
            projectId: "paulierodriguez-dev",
            storageBucket: "paulierodriguez-dev.appspot.com",
            messagingSenderId: "210220386821",
            appId: "1:210220386821:web:c5b767209a1c87947b2a6c",
            measurementId: "G-XELLMVWVQ0"
          } 
         }, 
       },
       {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          analyzerPort: 3000,
          //only set this to true in local builds, not deployment prod builds
          production: false,
        },
      },  ],
};
