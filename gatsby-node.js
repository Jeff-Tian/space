/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.createPages = ({
                         graphql,
                         actions,
                       }) => {
  const {
    createPage,
  } = actions

  const blogPost = path.resolve('./src/templates/yuque-post.js')
  return graphql(
      `
      {
        allYuqueDoc(sort: { fields: [created_at], order: DESC }) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allYuqueDoc.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/posts/${post.node.slug}/`,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}
