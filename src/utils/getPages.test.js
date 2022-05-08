import * as assert from "assert";
import getPages from "./getPages.js";

describe('getPages', () => {
    it('filters out pages that are not for displaying in homepage', () => {
        const pages = [{
            base: "",
            frontmatter: {},
            name: "use-typescript-to-make-ddd-come-true-4ff0",
            path: "/posts/use-typescript-to-make-ddd-come-true-4ff0/",
            relativeDir: "/posts",
            relativePath: "/posts/use-typescript-to-make-ddd-come-true-4ff0",
            url: "/posts/use-typescript-to-make-ddd-come-true-4ff0"
        }];

        assert.strictEqual(getPages(pages, "/posts").length, 1);
    });

    it('filters node to display in homepage', () => {
        const pages = [{
            component: "/Users/cnjeftia/jeff-tian/unicms-copy-01/src/templates/post.js",
            internal: {
                content: null,
                contentDigest: "940c24d8eb67ce6e5b9d749721c09477",
                description: null,
                mediaType: null,
                type: "SitePage"
            },
            matchPath: null,
            path: "/posts/20年之后的我/",
            pluginCreator: {
                resolve: "/Users/cnjeftia/jeff-tian/unicms-copy-01/plu"
            }
        }];

        assert.strictEqual(getPages(pages, "/posts").length, 1);
    });
});