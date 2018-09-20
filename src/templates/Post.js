import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostBody from '../components/Post/PostBody'
import SneakPeak from '../components/Post/SneakPeak'
import Share from '../components/Post/Share'
import Author from '../components/Post/Author'

export default class Post extends Component {
  render() {
    const {
      data,
      location,
      pageContext: { next, prev }
    } = this.props

    if (!data) return null

    const {
      markdownRemark: post,
      markdownRemark: { frontmatter, html, timeToRead },
      site: {
        siteMetadata: { url, authorName, authorTwitterAccount }
      },
      authornote,
      profilefoto
    } = data

    return (
      <Layout location={location} meta={data}>
        <article>
          <small>
            {frontmatter.date} • {timeToRead} min read
          </small>
          <h1>{frontmatter.title}</h1>
          <PostBody dangerouslySetInnerHTML={{ __html: html }} />
          <Share siteUrl={url} post={post} />
          <Author
            name={authorName}
            note={authornote}
            image={profilefoto}
            twitter={authorTwitterAccount}
          />
          <SneakPeak next={next} prev={prev} />
        </article>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        url
        authorName
        authorTwitterAccount
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "es-do")
        image
      }
      excerpt
      fields {
        slug
        prefix
      }
      timeToRead
    }
    authornote: markdownRemark(fileAbsolutePath: { regex: "/author/" }) {
      id
      html
    }
    profilefoto: imageSharp(
      fluid: { originalName: { regex: "/profile-square.jpg/" } }
    ) {
      fluid(maxWidth: 350) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
