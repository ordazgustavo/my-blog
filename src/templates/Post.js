import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostBody from '../components/Posts/PostBody'

export default class Post extends Component {
  render() {
    const { data, location } = this.props

    if (!data) return null

    const {
      markdownRemark: { frontmatter, html, timeToRead },
    } = data
    return (
      <Layout location={location} meta={data}>
        <small>
          {frontmatter.date} • {timeToRead} min read
        </small>
        <h1>{frontmatter.title}</h1>
        <PostBody dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
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
      }
      timeToRead
    }
  }
`
