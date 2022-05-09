module.exports = {
    convertGraphQLNodeToPage({article: {url, comments_count, published_at, description, positive_reactions_count, slug, tags, title, body_html}}) {
        const frontmatter = {
            canonical_url: url,
            comments_count,
            date: published_at,
            excerpt: description,
            positive_reactions_count,
            stackbit_url_path: `/posts/${slug}`,
            tags,
            template: 'post',
            title,
        }

        return {
            base: '',
            frontmatter,
            html: body_html,
            menus: {},
            pages: [],
            relativeDir: '',
            relativePath: '',
            site: {},
            url: frontmatter.stackbit_url_path,
        };
    }
};