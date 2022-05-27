import React from 'react'

export default class Search extends React.Component {
    componentDidMount() {
        console.log('search ready');

        if (typeof window.algoliasearchNetlify !== 'undefined') {
            window.algoliasearchNetlify({
                appId: 'EQ1Z5B904I',
                apiKey: '6fdff8abb804f089774c9c7e0b80bfbe',
                siteId: '7dcb93a2-3f0f-40e1-8f5d-27bf4b907490',
                branch: 'master',
                selector: 'div#algolia-search',
            });


            console.log('algolia loaded');
        }
    }

    render() {
        return <div type="search" id="algolia-search"
                    placeholder="Type to search... 输入文字进行搜索……"
                    aria-label="Search"/>
    }
}
