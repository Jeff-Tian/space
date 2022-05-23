import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
        <head>
            {props.headComponents}
            <link rel="stylesheet" href="/algolia/algoliasearchNetlify.css" type="text/css" />
        </head>
        <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script src="/algolia/algoliasearchNetlify.js" type="text/javascript"></script>
        </body>
        </html>
    )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
