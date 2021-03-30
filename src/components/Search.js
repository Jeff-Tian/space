import React from 'react'

export default class Search extends React.Component {
  render() {
    return <input type="search" id="agolia-search"
                  placeholder="Type to search... 输入文字进行搜索……"
                  aria-label="Search"/>
  }
}
