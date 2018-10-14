import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Loadable from 'react-loadable'

import Seo from '../components/Seo/Seo'
import SneakPeak from '../components/Post/SneakPeak'
import Author from '../components/Post/Author'
import Card, { CardBodyPost } from '../components/Card'

const AsyncShare = Loadable({
  loader: () => import('../components/Post/Share'),
  loading() {
    return <div>Loading...</div>
  }
})

class PostTemplate extends Component {
  render() {
    const {
      data,
      pageContext: { next, prev }
    } = this.props

    if (!data) return null

    const {
      markdownRemark: post,
      markdownRemark: { frontmatter, html, timeToRead }
    } = data

    return (
      <>
        <Seo site={data.site} meta={data} />
        <article>
          <small>
            {frontmatter.date} • {timeToRead} min read
          </small>
          <h1>{frontmatter.title}</h1>
          <Card>
            {/* <CardBody> */}
            <CardBodyPost dangerouslySetInnerHTML={{ __html: html }} />
            {/* </CardBody> */}
          </Card>
          <Author />
          <AsyncShare post={post} />
          <SneakPeak next={next} prev={prev} />
        </article>
      </>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "es-do")
        image {
          publicURL
        }
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
