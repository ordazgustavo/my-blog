import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  margin: 40px 0;
  padding: 40px 0;
  border-top: 1px solid rgb(236, 235, 234);
  border-bottom: 1px solid rgb(236, 235, 234);
  h3,
  p {
    margin: 0;
  }
`

const query = graphql`
  query AuthorDataQuery {
    site {
      siteMetadata {
        authorName
        authorTwitterAccount
      }
    }
    authornote: markdownRemark(fileAbsolutePath: { regex: "/author/" }) {
      html
    }
    profilefoto: imageSharp(
      fluid: { originalName: { regex: "/profile-square.jpg/" } }
    ) {
      fluid(maxWidth: 350) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Author = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Wrapper>
        <div>
          <Img
            style={{ width: '70px', borderRadius: '50%', marginRight: '15px' }}
            fluid={data.profilefoto.fluid}
          />
        </div>
        <div>
          <h3>{data.site.siteMetadata.authorName}</h3>
          <div dangerouslySetInnerHTML={{ __html: data.authornote.html }} />
          <a
            href={`https://twitter.com/${
              data.site.siteMetadata.authorTwitterAccount
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{data.site.siteMetadata.authorTwitterAccount}
          </a>
        </div>
      </Wrapper>
    )}
  />
)

export default Author
