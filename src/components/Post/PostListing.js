import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Card, { CardBody, CardImage } from '../Card'

const PostListing = ({ post, author, featured }) => (
  <Link to={post.fields.slug} title={post.frontmatter.title}>
    <Card>
      {featured ? (
        <CardImage>
          <Img
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        </CardImage>
      ) : null}
      <CardBody>
        <small>
          {post.frontmatter.date} • {post.timeToRead} min read •{' '}
          {author.authorName}
        </small>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.excerpt}</p>
      </CardBody>
    </Card>
  </Link>
)

export default PostListing

export const query = graphql`
  fragment PostListingData on MarkdownRemark {
    id
    frontmatter {
      title
      date(formatString: "DD MMM, YYYY", locale: "es-do")
      image {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    timeToRead
    fields {
      slug
    }
    excerpt
  }
`
