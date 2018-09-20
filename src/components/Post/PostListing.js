import React from 'react'
import Link from 'gatsby-link'
import Card from '../Card'

const PostListing = ({ post }) => {
  return (
    <Link to={post.fields.slug}>
      <Card>
        <small>
          {post.frontmatter.date} • {post.timeToRead} min read
        </small>
        <h3>{post.frontmatter.title}</h3>
        <p>{post.excerpt}</p>
      </Card>
    </Link>
  )
}

export default PostListing
