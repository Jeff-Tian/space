/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const _ = require("lodash");
/**
 * Create homepage that collects all the posts
 * @param actions
 * @param graphql
 * @param getNode
 * @returns {Promise<void>}
 */
exports.createPages = function ({actions, graphql, getNode}) {
    return graphql(`
query {
  allSitePage {
    edges {
      node {
        pageContext
        component
        internal {
          type
          content
          description
          mediaType
          contentDigest
        }
        path
        matchPath
        pluginCreator {
          resolve
        }
      }
    }
  }
}
  `).then(({data}) => {
        const pages = data.allSitePage.edges.map(({node}) => node.pageContext);
        console.log('pages = ', pages);

        const siteNode = getNode('Site');
        const siteDataNode = getNode('SiteData');
        const siteData = _.get(siteDataNode, 'data', {});

        actions.createPage({
            path: '/',
            component: path.resolve('./src/templates/home.js'),
            context: {
                url: '/',
                relativePath: '/',
                base: '',
                pages: pages,
                site: {
                    siteMetadata: _.get(siteData, 'site-metadata', {}),
                    pathPrefix: siteNode.pathPrefix,
                    data: _.omit(siteData, 'site-metadata')
                }
            }
        });
    });
}