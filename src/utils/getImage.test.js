const assert = require('assert');
const getImage = require('./getImage');

describe('find images', function () {
    it('finds the 1st image from html ast', () => {
        const htmlAst = {
            "type": "root",
            "children": [
                {
                    "type": "element",
                    "tagName": "p",
                    "properties": {},
                    "children": [
                        {
                            "type": "text",
                            "value": "I am an open source lover, and is creating open source projects, too. If you find my work useful, feel free to buy me a coffee!"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "\n"
                },
                {
                    "type": "element",
                    "tagName": "h2",
                    "properties": {},
                    "children": [
                        {
                            "type": "text",
                            "value": "Support me"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "\n"
                },
                {
                    "type": "element",
                    "tagName": "table",
                    "properties": {},
                    "children": [
                        {
                            "type": "text",
                            "value": "\n  "
                        },
                        {
                            "type": "element",
                            "tagName": "caption",
                            "properties": {},
                            "children": [
                                {
                                    "type": "text",
                                    "value": "Thank you very much!"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "value": "\n  "
                        },
                        {
                            "type": "element",
                            "tagName": "tbody",
                            "properties": {},
                            "children": [
                                {
                                    "type": "element",
                                    "tagName": "tr",
                                    "properties": {},
                                    "children": [
                                        {
                                            "type": "text",
                                            "value": "\n    "
                                        },
                                        {
                                            "type": "element",
                                            "tagName": "th",
                                            "properties": {},
                                            "children": [
                                                {
                                                    "type": "text",
                                                    "value": "Alipay"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "value": "\n    "
                                        },
                                        {
                                            "type": "element",
                                            "tagName": "th",
                                            "properties": {},
                                            "children": [
                                                {
                                                    "type": "text",
                                                    "value": "Wechat"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "value": "\n\t\t"
                                        },
                                        {
                                            "type": "element",
                                            "tagName": "th",
                                            "properties": {},
                                            "children": [
                                                {
                                                    "type": "text",
                                                    "value": "Paypal"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "value": "\n  "
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "value": "\n  "
                                },
                                {
                                    "type": "element",
                                    "tagName": "tr",
                                    "properties": {},
                                    "children": [
                                        {
                                            "type": "text",
                                            "value": "\n    "
                                        },
                                        {
                                            "type": "element",
                                            "tagName": "td",
                                            "properties": {},
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "tagName": "img",
                                                    "properties": {
                                                        "src": "https://tictactoe.js.org/static/media/alipay-receive-money.a983b729.jpg",
                                                        "alt": "AliPay"
                                                    },
                                                    "children": []
                                                }
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "value": "\n    "
                                        },
                                        {
                                            "type": "element",
                                            "tagName": "td",
                                            "properties": {},
                                            "children": [
                                                {
                                                    "type": "text",
                                                    "value": "To do"
                                                }
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "value": "\n\t\t"
                                        },
                                        {
                                            "type": "element",
                                            "tagName": "td",
                                            "properties": {},
                                            "children": [
                                                {
                                                    "type": "element",
                                                    "tagName": "a",
                                                    "properties": {
                                                        "href": "https://paypal.me/jefftian",
                                                        "target": "_blank"
                                                    },
                                                    "children": [
                                                        {
                                                            "type": "text",
                                                            "value": "paypal.me/jefftian"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "text",
                                            "value": "\n  "
                                        }
                                    ]
                                },
                                {
                                    "type": "text",
                                    "value": "\n"
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        const image = getImage.findFirstImageInHtmlAst(htmlAst)
        assert.ok(image)
    })
})
;