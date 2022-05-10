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
    const queryPosts = graphql(`
query {
  allMarkdownRemark(
    limit: 100
    filter: {frontmatter: {template: {eq: "post"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        excerpt
        id
        frontmatter {
          title
          template
          has_more_link
          more_link_text
          excerpt
          canonical_url
          date
          img_path
          positive_reactions_count
          stackbit_url_path
        }
      }
    }
  }
}
  `);

    const queryHomepage = graphql(`
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
      `);

    return Promise.all([queryPosts, queryHomepage]).then(([{data}, {data: {markdownRemark: {frontmatter}}}]) => {
        const posts = data.allMarkdownRemark.edges.map(({node}) => ({
            ...node,
            url: node.frontmatter.stackbit_url_path
        }));

        const pageSize = 5;
        const totalPages = Math.ceil(posts.length / pageSize);

        const siteNode = getNode('Site');
        const siteDataNode = getNode('SiteData');
        const siteData = _.get(siteDataNode, 'data', {});

        Array.from({length: totalPages}).forEach((__, i) => {
            console.log('creating homepage page', i);

            actions.createPage({
                path: i === 0 ? '/' : `/${i + 1}`,
                component: path.resolve('./src/templates/home.js'),
                context: {
                    limit: pageSize,
                    skip: i * pageSize,
                    totalPages,
                    currentPage: i + 1,

                    frontmatter,
                    url: '/',
                    relativePath: '/',
                    base: '',
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