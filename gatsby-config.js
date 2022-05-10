const siteMetadata = require('./site-metadata.json');
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  pathPrefix: '/',
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-source-data`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          }
        }
      }
    },
    {
      resolve: `gatsby-remark-page-creator`,
      options: {},
    },
    {
      resolve: `@stackbit/gatsby-plugin-menus`,
      options: {
        sourceUrlPath: `fields.url`,
        pageContextProperty: `menus`,
      },
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: 'jefftian'
      }
    },
    {
      resolve: '@jeff-tian/gatsby-source-yuque',
      options: {
        login: 'tian-jie',
        repo: 'kb',
        mdNameFormat: 'slug',
      },
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'GitHub',
    //     fieldName: 'github',
    //     url: 'https://api.github.com/graphql',
    //     // HTTP headers
    //     headers: {
    //       // Learn about environment variables: https://gatsby.dev/env-vars
    //       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //     },
    //     // HTTP headers alternatively accepts a function (allows async)
    //     // headers: async () => {
    //     //   return {
    //     //     Authorization: await getAuthorizationToken(),
    //     //   }
    //     // },
    //     // Additional options to pass to node-fetch
    //     fetchOptions: {},
    //   },
    // },
  ],
};
