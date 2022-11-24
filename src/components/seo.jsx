import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
      graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.title

  return (
      <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${site.siteMetadata.title}`}
          meta={[
            {
              key: 'description',
              name: 'description',
              content: metaDescription,
            },
            {
              key: 'og:title',
              property: 'og:title',
              content: title,
            },
            {
              key: 'og:description',
              property: 'og:description',
              content: metaDescription,
            },
            {
              key: 'og:type',
              property: 'og:type',
              content: 'website',
            },
            {
              key: 'twitter:card',
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: site.siteMetadata.author,
            },
            {
              key: 'twitter:title',
              name: 'twitter:title',
              content: title,
            },
            {
              key: 'twitter:description',
              name: 'twitter:description',
              content: metaDescription,
            },
          ].concat(meta)}
      />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default SEO
