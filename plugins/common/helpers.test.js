const assert = require("assert");
const {convertGraphQLNodeToPage} = require("./helpers");
describe('helpers', ()=>{
    it('converts a GraphQL node to page object', ()=>{
        const node = {
            "id": "768568",
            "internal": {
                "content": null,
                "mediaType": null,
                "type": "DevArticles"
            },
            "article": {
                "url": "https://dev.to/jefftian/use-typescript-to-make-ddd-come-true-4ff0",
                "user": {
                    "name": "Jeff",
                    "username": "jefftian",
                    "twitter_username": "zizhujy",
                    "github_username": "Jeff-Tian",
                    "website_url": "https://jeff-tian.jiwai.win/",
                    "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--a5qDZLv3--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/318420/3bfd2d99-430c-4049-8dd5-e2adc961e1e0.png",
                    "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--Bfc8Y94h--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/318420/3bfd2d99-430c-4049-8dd5-e2adc961e1e0.png"
                },
                "title": "Use TypeScript to make DDD come true",
                "tag_list": "typescript, tplant, ddd, uml",
                "tags": [
                    "typescript",
                    "tplant",
                    "ddd",
                    "uml"
                ],
                "positive_reactions_count": 12,
                "comments_count": 0,
                "canonical_url": "https://dev.to/jefftian/use-typescript-to-make-ddd-come-true-4ff0",
                "body_html": "html",
                "published_at": "2021-07-22T11:54:37Z",
                "published_timestamp": "2021-07-22T11:54:37Z",
                "slug": "inversifyjs-2de0",
                "description": "DDD"
            }
        };

        assert.deepStrictEqual(convertGraphQLNodeToPage(node), {
            "base": "",
            "frontmatter": {
                "canonical_url": "https://dev.to/jefftian/use-typescript-to-make-ddd-come-true-4ff0",
                "comments_count": 0,
                "date": "2021-07-22T11:54:37Z",
                "excerpt": "DDD",
                "positive_reactions_count": 12,
                "stackbit_url_path": "/posts/inversifyjs-2de0",
                "tags": [
                    "typescript",
                    "tplant",
                    "ddd",
                    "uml",
                ],
                "template": "post",
                "title": "Use TypeScript to make DDD come true",
            },
            "html": "html",
            "menus": {},
            "pages": [],
            "relativeDir": "",
            "relativePath": "",
            "site": {},
            "url": "/posts/inversifyjs-2de0"
        });
    });
});