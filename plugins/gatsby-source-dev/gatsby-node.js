const axios = require("axios");
const queryString = require("query-string");
const {escapeSpecialCharacters} = require("../common/escape-special-characters");

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }, { username }) => {
    if (!username) {
        throw new Error("You must provide a `username` to `gatsby-source-dev`.");
    }

    const { createNode } = actions;

    const articles = [];

    const params = queryString.stringify({
        username
    });

    // eslint-disable-next-line no-await-in-loop
    const res = await axios.get(`https://dev.to/api/articles?${params}`, {
        headers: {
            "cache-control": "no-cache",
            pragma: "no-cache",
            accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "upgrade-insecure-requests": 1
        }
    });

    // eslint-disable-next-line no-await-in-loop
    const { data } = res;

    // eslint-disable-next-line no-restricted-syntax
    for (const article of data) {
        // eslint-disable-next-line no-await-in-loop
        const articleResult = await axios(
            `https://dev.to/api/articles/${article.id}`
        );
        // eslint-disable-next-line no-await-in-loop
        const articleData = await articleResult.data;
        articles.push({ ...article, ...articleData });
    }

    articles.forEach(article => {
        const template = `---
stackbit_url_path: posts/${article.slug}
title: '${escapeSpecialCharacters(article.title.replace(/^@/, ``))}'
date: '${article.published_at}'
excerpt: >-
	${escapeSpecialCharacters(article.excerpt)}
tags: ''
categories: ''
template: post
---

${article.body_html}
`;

        const metaNode = {
            article: article,
            id: createNodeId(`dev-article-${article.id}`),
            parent: null,
            children: [],
            internal: {
                type: "DevArticles",
                mediaType: `text/markdown`,
                content: template,
                contentDigest: createContentDigest(article)
            }
        };

        createNode(Object.assign({}, article, metaNode));
    });
};