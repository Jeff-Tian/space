const _ = require('lodash');

const getImageSrcsFromNodes = nodes => _.map(_.filter(nodes, node => node.type === 'element' && node.tagName === 'img'), r => _.get(r, 'properties.src'))

const getImageSrcsFromSingleNode = node => getImageSrcsFromNodes([node]);

module.exports = {
    findImageSrcsFromHtmlAst(htmlAst) {
        const findImageSrcs = (root) => {
            return getImageSrcsFromSingleNode(root).concat(_.flatMap(root.children, findImageSrcs))
        }

        return findImageSrcs(htmlAst);
    }
}