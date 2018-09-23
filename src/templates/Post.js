import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostBody from '../components/Post/PostBody'
import SneakPeak from '../components/Post/SneakPeak'
import Share from '../components/Post/Share'
import Author from '../components/Post/Author'

class PostTemplate extends Component {
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
    } = data

    console.log(this.props)
    return (
      <Layout location={location} meta={data}>
        <article>
          <small>
            {frontmatter.date} • {timeToRead} min read
          </small>
          <h1>{frontmatter.title}</h1>
          <PostBody dangerouslySetInnerHTML={{ __html: html }} />
          <Author />
          <Share post={post} />
          <SneakPeak next={next} prev={prev} />
        </article>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "es-do")
      }
      excerpt
      fields {
        slug
        prefix
      }
      timeToRead
    }
  }
`
