/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const _ = require("lodash");
const getPages = require("./src/utils/getPages");
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
      }
    }
  }
}
  `).then(({data}) => {
        return graphql(`
query homePageQuery {
  markdownRemark(fields: {url: {eq: "/"}}) {
    frontmatter {
      canonical_url
      comments_count
      title
      template
      more_link_text
      date(difference: "")
      excerpt
      has_more_link
    }
    id
    fileAbsolutePath
    fields {
      url
    }
  }
}
      `).then(({data: {markdownRemark: {frontmatter}}}) => {
            const allPages = data.allSitePage.edges.map(({node}) => node.pageContext);

            const posts = _.orderBy(getPages(allPages, '/posts'), 'frontmatter.date', 'desc');
            
            console.log('posts len ', posts.length);

            const siteNode = getNode('Site');
            const siteDataNode = getNode('SiteData');
            const siteData = _.get(siteDataNode, 'data', {});

            actions.createPage({
                path: '/',
                component: path.resolve('./src/templates/home.js'),
                context: {
                    frontmatter,
                    url: '/',
                    relativePath: '/',
                    base: '',
                    pages: posts,
                    site: {
                        siteMetadata: _.get(siteData, 'site-metadata', {}),
                        pathPrefix: siteNode.pathPrefix,
                        data: _.omit(siteData, 'site-metadata')
                    }
                }
            });
        });
    });
}