const assert = require('assert');
const { getSlug, getFolder } = require('./helpers');

describe("helpers", () => {
    it("gets the slug", () => {
        const stackbitUrl = 'posts/1234'
        assert.strictEqual(getSlug(stackbitUrl), '1234');
    })

    it('gets folder', () => {
        const stackbitUrl = 'posts/1234'
        assert.strictEqual(getFolder(stackbitUrl), 'posts')
    })
})