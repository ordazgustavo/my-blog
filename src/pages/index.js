import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostListing from '../components/Post/PostListing'

const IndexPage = ({ data, location }) => (
  <Layout location={location} image={data.background}>
    {data.allMarkdownRemark.edges.map(({ node }, i) => (
      <PostListing
        key={node.id}
        post={node}
        featured={i === 0}
      />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          ...PostListingData
        }
      }
    }
  }
`
