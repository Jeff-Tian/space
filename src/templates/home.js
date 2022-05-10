import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import {graphql} from 'gatsby';
import Header from '../components/Header';
import {Link, withPrefix} from '../utils';
import Footer from '../components/Footer';
import {Layout} from "../components";
import Pagination from "../components/Pagination";

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
    query blogListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
            filter: {frontmatter: {template: {eq: "post"}}}
        ) {
            edges {
              node {
                excerpt
                id
                frontmatter {
                  title
                  template
                  has_more_link
                  more_link_text
                  excerpt
                  canonical_url
                  date
                  img_path
                  positive_reactions_count
                  stackbit_url_path
                }
              }
            }
        }
    }
`;

export default class Home extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges

        return (
            <Layout {...this.props}>
                <Header {...this.props} site={this.props.pageContext.site} page={this.props.pageContext}
                        image={_.get(this.props, 'pageContext.site.siteMetadata.header.background_img', null)}/>
                <div id="content" className="site-content">
                    <main id="main" className="site-main inner">
                        <Pagination skip={this.props.pageContext.skip} limit={this.props.pageContext.limit}
                                    totalPages={this.props.pageContext.totalPages}
                                    currentPage={this.props.pageContext.currentPage}/>

                        <div className="post-feed">
                            {_.map(posts, ({node: post}, post_idx) => (
                                <article key={post_idx} className="post">
                                    <header className="post-header">
                                        <h2 className="post-title"><Link
                                            to={withPrefix(_.get(post, 'frontmatter.stackbit_url_path', null))}
                                            rel="bookmark">{_.get(post, 'frontmatter.title', null)}</Link>
                                        </h2>
                                        <div className="post-meta">
                                            Published on <time className="published"
                                                               dateTime={moment(_.get(post, 'frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date', null)).strftime('%B %d, %Y')}</time>
                                        </div>
                                    </header>
                                    {_.get(post, 'frontmatter.thumb_img_path', null) && (
                                        <Link className="post-thumbnail" to={withPrefix(_.get(post, 'url', null))}>
                                            <img className="thumbnail"
                                                 src={withPrefix(_.get(post, 'frontmatter.thumb_img_path', null))}
                                                 alt={_.get(post, 'frontmatter.title', null)}/>
                                        </Link>
                                    )}
                                    <div className="post-content">
                                        <p>{
                                            _.get(post, 'frontmatter.excerpt', null) || _.get(post, 'excerpt', null)}
                                        </p>
                                    </div>
                                    {((_.get(this.props, 'pageContext.frontmatter.has_more_link', null) === true) && _.get(this.props, 'pageContext.frontmatter.more_link_text', null)) && (
                                        <p className="read-more">
                                            <Link className="read-more-link"
                                                  to={withPrefix(_.get(post, 'frontmatter.stackbit_url_path', null))}>{_.get(this.props, 'pageContext.frontmatter.more_link_text', null)}
                                                <span className="icon-arrow-right" aria-hidden="true"/></Link>
                                        </p>
                                    )}
                                </article>
                            ))}
                        </div>

                        <Pagination skip={this.props.pageContext.skip} limit={this.props.pageContext.limit}
                                    totalPages={this.props.pageContext.totalPages}
                                    currentPage={this.props.pageContext.currentPage}/>
                    </main>
                    <Footer {...this.props} site={this.props.pageContext.site} page={this.props.pageContext}
                            image={_.get(this.props, 'pageContext.site.siteMetadata.header.background_img', null)}>
                    </Footer>
                </div>
            </Layout>
        );
    }
}
