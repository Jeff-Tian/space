const path = require("path");
const {createFilePath} = require("gatsby-source-filesystem");
const _ = require('lodash');
const util = require('util');

function findFileNode({node, getNode}) {
    let fileNode = node;
    let ids = [fileNode.id];

    while (fileNode && fileNode.internal.type !== `File` && fileNode.parent) {
        fileNode = getNode(fileNode.parent);

        if (!fileNode) {
            break;
        }

        if (_.includes(ids, fileNode.id)) {
            console.log(`found cyclic reference between nodes`);
            break;
        }

        ids.push(fileNode.id);
    }

    if (!fileNode || fileNode.internal.type !== `File`) {
        console.log('did not find ancestor File node', fileNode?.title);
        return null;
    }

    return fileNode
}

exports.onCreateNode = ({node, getNode, actions}, options) => {

    const {createNodeField} = actions;

    if (node.internal.type === "DevArticles") {
        let fileNode = findFileNode({node, getNode});
        if (!fileNode) {
            return;
            throw new Error('could not find parent File node for DevArticles node: ' + util.inspect(node));
        }

        let url;
        if (node.frontmatter.url) {
            url = node.frontmatter.url;
        }else if (_.get(options, 'uglyUrls', false)) {
            url = path.join(fileNode.relativeDirectory, fileNode.name + '.html');
        } else {
            url = createFilePath({node, getNode});
        }

        createNodeField({node, name: "url", value: url});
        createNodeField({node, name: "absolutePath", value: fileNode.absolutePath});
        createNodeField({node, name: "relativePath", value: fileNode.relativePath});
        createNodeField({node, name: "absoluteDir", value: fileNode.dir});
        createNodeField({node, name: "relativeDir", value: fileNode.relativeDirectory});
        createNodeField({node, name: "base", value: fileNode.base});
        createNodeField({node, name: "ext", value: fileNode.ext});
        createNodeField({node, name: "name", value: fileNode.name});
    }
};

exports.createPages = ({graphql, getNode, actions, getNodesByType}) => {
    const {createPage} = actions;

    // Use GraphQL to bring only the "id" and "html" (added by gatsby-transformer-remark)
    // properties of the MarkdownRemark nodes. Don't bring additional fields
    // such as "relativePath". Otherwise, Gatsby's GraphQL resolvers might infer
    // types these fields as File and change their structure. For example, the
    // "html" attribute exists only on a GraphQL node, but does not exist on the
    // underlying node.
    return graphql(`
    {
      allDevArticles {
        edges {
          node {
            id
            article {
                canonical_url
                cover_image
                created_at
                description
                path
                published_at
                slug
                social_image
                url
            }
          }
        }
      }
    }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        console.log('result = ', result);

        const nodes = result.data.allDevArticles.edges.map(({node}) => node);
        const siteNode = getNode('Site');
        console.log('siteNode = ', siteNode)
        const siteDataNode = getNode('SiteData');
        console.log('siteDataNode = ', siteDataNode);
        const sitePageNodes = getNodesByType('SitePage');
        const sitePageNodesByPath = _.keyBy(sitePageNodes, 'path');
        const siteData = _.get(siteDataNode, 'data', {});

        console.log('nodes length = ', nodes.length);

        const pages = nodes.map(graphQLNode => {
            // Use the node id to get the underlying node. It is not exactly the
            // same node returned by GraphQL, because GraphQL resolvers might
            // transform node fields.
            const node = getNode(graphQLNode.id);
            console.log('node = ', node);

            // throw new Error('has node fields! ' + util.inspect(node))
            return {
                path: '/posts/' + graphQLNode.article.slug + '/',
                url: '/posts/' + graphQLNode.article.slug + '/',
                relativePath: '/posts/' + graphQLNode.article.slug,
                relativeDir: '/posts',
                base: '',
                name: graphQLNode.article.slug,
                frontmatter: {
                    title: graphQLNode.article.title
                },
                html: graphQLNode.article.body_html
            };
        });

        nodes.forEach(graphQLNode => {
            const url = '/posts/' + graphQLNode.article.slug + '/';
            const component = path.resolve(`./src/templates/DevArticle.js`);
            const existingPageNode = _.get(sitePageNodesByPath, url);

            const page = {
                path: '/posts/' + graphQLNode.article.slug + '/',
                component: component,
                context: {
                    url: url,
                    relativePath: '/posts/' + graphQLNode.article.slug,
                    relativeDir: '/posts',
                    base: '',
                    name: graphQLNode.article.slug,
                    html: graphQLNode.article.body_html,
                    frontmatter: {
                        title: graphQLNode.article.title
                    },
                    pages: pages,
                    site: {
                        siteMetadata: _.get(siteData, 'site-metadata', {}),
                        pathPrefix: siteNode.pathPrefix,
                        data: _.omit(siteData, 'site-metadata')
                    }
                }
            };

            if (existingPageNode && !_.get(page, 'context.menus')) {
                page.context.menus = _.get(existingPageNode, 'context.menus');
            }

            createPage(page);
        });
    });
};
