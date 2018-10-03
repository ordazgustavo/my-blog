import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Seo = ({ site, meta }) => {
  console.log(meta)
  const postTitle = (((meta || {}).markdownRemark || {}).frontmatter || {})
    .title
  const postExcerpt = ((meta || {}).markdownRemark || {}).excerpt
  const postImage = (
    (((meta || {}).markdownRemark || {}).frontmatter || {}).image || {}
  ).publicURL
  const postSlug = (((meta || {}).markdownRemark || {}).fields || {}).slug

  const siteTitle = ((site || {}).siteMetadata || {}).title
  const siteDescription = ((site || {}).siteMetadata || {}).description
  const siteImage = ((site || {}).siteMetadata || {}).image
  const siteUrl = ((site || {}).siteMetadata || {}).siteUrl
  const siteLang = ((site || {}).siteMetadata || {}).lang

  const authorTwitterAccount = ((site || {}).siteMetadata || {})
    .authorTwitterAccount

  const title = postTitle ? `${postTitle} - ${siteTitle}` : siteTitle
  const excerpt = postExcerpt ? postExcerpt : siteDescription
  const image = postImage ? siteUrl + postImage : siteUrl + siteImage
  const url = postSlug ? siteUrl + postSlug : siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: siteLang || 'es',
        prefix: 'og: http://ogp.me/ns#'
      }}
    >
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={excerpt} />
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      {/* <meta property="fb:app_id" content={facebook.appId} /> */}
      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:site"
        content={authorTwitterAccount ? `@${authorTwitterAccount}` : ''}
      />
      <meta
        name="twitter:creator"
        content={authorTwitterAccount ? `@${authorTwitterAccount}` : ''}
      />
    </Helmet>
  )
}

Seo.propTypes = {
  data: PropTypes.object
}

export default Seo
