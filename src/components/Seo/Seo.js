import React from 'react'
import Helmet from 'react-helmet'

const Seo = ({ site, meta }) => {
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
  const { siteUrl } = (site || {}).siteMetadata || {}
  const siteLang = ((site || {}).siteMetadata || {}).lang

  const { authorTwitterAccount } = (site || {}).siteMetadata || {}

  const title = postTitle ? `${postTitle} - ${siteTitle}` : siteTitle
  const excerpt = postExcerpt || siteDescription
  const image = postImage ? siteUrl + postImage : siteUrl + siteImage
  const url = postSlug ? siteUrl + postSlug : siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: siteLang || 'es',
        prefix: 'og: http://ogp.me/ns#',
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: excerpt,
        },
        {
          name: 'og:url',
          content: url,
        },
        {
          name: 'og:title',
          content: title,
        },
        {
          name: 'og:site_name',
          content: siteTitle,
        },
        {
          name: 'og:description',
          content: excerpt,
        },
        {
          name: 'og:image',
          content: image,
        },
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: excerpt,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'twitter:site',
          content: authorTwitterAccount ? `@${authorTwitterAccount}` : '',
        },
        {
          name: 'twitter:creator',
          content: authorTwitterAccount ? `@${authorTwitterAccount}` : '',
        },
      ]}
    />
  )
}

export default Seo
