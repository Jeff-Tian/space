import React from 'react';
import _ from 'lodash';

import '../sass/main.scss';

export const Head = (props) => (
    <>
        <title>{_.get(props, 'pageContext.frontmatter.title', null) && (_.get(props, 'pageContext.frontmatter.title', null) + ' - ')}{_.get(props, 'pageContext.site.siteMetadata.title', null)}</title>
        <meta charSet="utf-8" key="charSet"/>
        <meta key="viewport" name="viewport" content="width=device-width, initialScale=1.0"/>
        <meta key="description" name="description"
              content={_.get(props, 'pageContext.frontmatter.excerpt', null) || _.get(props, 'pageContext.site.siteMetadata.description', null)}/>
        {(_.get(props, 'pageContext.frontmatter.template', null) === 'post') && (
            _.get(props, 'pageContext.frontmatter.canonical_url', null) && (
                <link rel="canonical" href={_.get(props, 'pageContext.frontmatter.canonical_url', null)}/>
            )
        )}
    </>
)

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="page"
                     className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette', null)}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}
