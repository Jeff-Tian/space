module.exports = {
    findImageSrcsFromHtmlAst(htmlAst) {
        const findImageSrcs = (root) => {
            let res = [];
            if (root.type === 'element' && root.tagName === 'img') {
                res.push(root.properties.src);
            }

            if (root.children) {
                res = res.concat(root.children.map(findImageSrcs).filter(x => x.length > 0).reduce((a, b) => a.concat(b), []));
            }

            return res;
        }

        return findImageSrcs(htmlAst);
    }
}