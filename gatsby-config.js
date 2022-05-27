const siteMetadata = require('./site-metadata.json');
require("dotenv").config({
    path: `.env`,
});

module.exports = {
    pathPrefix: '/',
    siteMetadata: { ...siteMetadata, siteUrl: 'https://jeff-tian.jiwai.win' },
    plugins: [`gatsby-plugin-react-helmet`, `gatsby-source-data`, `gatsby-transformer-remark`, {
        resolve: `gatsby-source-filesystem`, options: {
            name: `pages`, path: `${__dirname}/src/pages`,
        },
    }, {
            resolve: `gatsby-plugin-sass`, options: {
                cssLoaderOptions: {
                    esModule: false, modules: {
                        namedExport: false,
                    }
                }
            }
        }, {
            resolve: `gatsby-remark-page-creator`, options: {},
        }, {
            resolve: `@stackbit/gatsby-plugin-menus`, options: {
                sourceUrlPath: `fields.url`, pageContextProperty: `menus`,
            },
        },
        {
            resolve: '@jeff-tian/gatsby-source-yuque',
            options: {
                login: 'tian-jie',
                repo: 'blog',
                mdNameFormat: 'slug',
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jeff Tian`,
                short_name: `jeff-tian`,
                start_url: `/`,
                background_color: `#666666`,
                theme_color: `#f45a4e`,
                display: `standalone`,
                icon: `src/favicon.png`,
                crossOrigin: `use-credentials`,
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


        {
            resolve: `gatsby-plugin-feed`, options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `, feeds: [{
                    serialize: ({ query: { site, allMarkdownRemark } }) => {
                        return allMarkdownRemark.edges.map(edge => {
                            return Object.assign({}, edge.node.frontmatter, {
                                description: edge.node.excerpt,
                                date: edge.node.frontmatter.date,
                                url: site.siteMetadata.siteUrl + edge.node.fields.name,
                                guid: site.siteMetadata.siteUrl + edge.node.fields.absolutePath,
                                custom_elements: [{ "content:encoded": edge.node.html }],
                            })
                        })
                    }, query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { absolutePath name }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `, output: "/rss.xml", title: "Jeff Tian 的博客",
                },],
            },
        },],
};
