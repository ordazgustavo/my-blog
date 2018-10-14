import React, { Component } from 'react'
import { graphql } from 'gatsby'

class PageTemplate extends Component {
  render() {
    const { data } = this.props

    if (!data) return null

    const {
      markdownRemark: { frontmatter, html }
    } = data

    return (
      <>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
