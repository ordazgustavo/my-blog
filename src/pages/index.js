import React from 'react'
import { graphql } from 'gatsby'

import PostListing from '../components/Post/PostListing'

const IndexPage = ({ data }) =>
  data.allMarkdownRemark.edges.map(({ node }, i) => (
    <PostListing
      key={node.id}
      post={node}
      author={data.site.siteMetadata}
      featured={i === 0}
    />
  ))

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        authorName
      }
    }
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
