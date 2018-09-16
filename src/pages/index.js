import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY", locale: "es-do")
          }
          timeToRead
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
