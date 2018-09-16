import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export default class PostPage extends Component {
  render() {
    const { data, location } = this.props

    if (!data) return null

    const {
      markdownRemark: { frontmatter, html },
    } = data
    return (
      <Layout location={location}>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
