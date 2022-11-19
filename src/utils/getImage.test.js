const assert = require('assert');
const getImage = require('./getImage');

describe('find images', function () {
    it('finds all the images from html ast', () => {
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

        const imageSrcList = getImage.findImageSrcsFromHtmlAst(htmlAst)
        assert.ok(imageSrcList)
        assert.ok(imageSrcList.length > 0)
        assert.deepStrictEqual(imageSrcList, [
            "https://tictactoe.js.org/static/media/alipay-receive-money.a983b729.jpg"
        ])
    })

    it('finds all the images with link from html ast', () => {
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
                            "value": "哎呀，掐指一算，我居然有一年多没有写过打油诗了！生活如此多的忧愁，没有打油诗如何能排解？诗好写，题目难拟。不过有人随口说了句顺口溜，那么我就拿它做题了！虽然有点儿长……"
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": " "
                },
                {
                    "type": "element",
                    "tagName": "div",
                    "properties": {
                        "className": [
                            "poem"
                        ]
                    },
                    "children": [
                        {
                            "type": "text",
                            "value": " "
                        },
                        {
                            "type": "element",
                            "tagName": "h2",
                            "properties": {
                                "align": "center"
                            },
                            "children": [
                                {
                                    "type": "element",
                                    "tagName": "font",
                                    "properties": {
                                        "color": "#9b00d3"
                                    },
                                    "children": [
                                        {
                                            "type": "text",
                                            "value": "既然我们这么高大上，为什么我们还这么荡（Down）？"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "value": "  "
                        },
                        {
                            "type": "element",
                            "tagName": "p",
                            "properties": {
                                "align": "right"
                            },
                            "children": [
                                {
                                    "type": "element",
                                    "tagName": "em",
                                    "properties": {},
                                    "children": [
                                        {
                                            "type": "text",
                                            "value": "作者：姐夫"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "value": "  "
                        },
                        {
                            "type": "element",
                            "tagName": "p",
                            "properties": {
                                "align": "center"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "value": "吃着火锅唱着歌，"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "value": "  "
                        },
                        {
                            "type": "element",
                            "tagName": "p",
                            "properties": {
                                "align": "center"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "value": "曲线救国也快乐。"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "value": "  "
                        },
                        {
                            "type": "element",
                            "tagName": "p",
                            "properties": {
                                "align": "center"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "value": "非要直线才肯走，"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "value": "  "
                        },
                        {
                            "type": "element",
                            "tagName": "p",
                            "properties": {
                                "align": "center"
                            },
                            "children": [
                                {
                                    "type": "text",
                                    "value": "止步不前受折磨。"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "value": "  "
                        }
                    ]
                },
                {
                    "type": "element",
                    "tagName": "p",
                    "properties": {},
                    "children": [
                        {
                            "type": "text",
                            "value": " "
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "  "
                },
                {
                    "type": "element",
                    "tagName": "p",
                    "properties": {},
                    "children": [
                        {
                            "type": "text",
                            "value": "有图有真相："
                        }
                    ]
                },
                {
                    "type": "text",
                    "value": "  "
                },
                {
                    "type": "element",
                    "tagName": "p",
                    "properties": {},
                    "children": [
                        {
                            "type": "element",
                            "tagName": "a",
                            "properties": {
                                "href": "https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/WP_001433.jpg"
                            },
                            "children": [
                                {
                                    "type": "element",
                                    "tagName": "img",
                                    "properties": {
                                        "title": "WP_001433",
                                        "style": "border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; padding-right: 0px",
                                        "border": 0,
                                        "alt": "WP_001433",
                                        "src": "https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/WP_001433_thumb.jpg",
                                        "width": 795,
                                        "height": 970
                                    },
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ],
            "data": {
                "quirksMode": false
            }
        }

        const imageSrcList = getImage.findImageSrcsFromHtmlAst(htmlAst)
        assert.ok(imageSrcList);
        assert.ok(imageSrcList.length > 0);
        assert.deepStrictEqual(imageSrcList[0], 'https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/WP_001433_thumb.jpg')
    })
})
;