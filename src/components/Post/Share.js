import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  FacebookShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
} from 'react-share'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  padding: 15px 0;
`

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  .share-count {
    text-align: center;
  }
`

const Share = props => {
  const {
    post: {
      fields: { slug },
      frontmatter: { title, image },
      excerpt,
    },
  } = props

  const iconSize = 36
  const filter = count => (count > 0 ? count : '')

  return (
    <StaticQuery
      query={graphql`
        query SiteDataQuery {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `}
      render={data => (
        <Wrapper>
          <h3>¿Te gustó el post?</h3>
          <p>
            Dedico mucho tiempo y esfuerzo a cada post, recursos y demos, ¡te
            estaría muy agradecido si te tomas un momento para compatirlo!
          </p>
          <Icons>
            <TwitterShareButton
              url={data.site.siteMetadata.siteUrl + slug}
              title={title}
              additionalProps={{
                'aria-label': 'Twitter share',
              }}
            >
              <TwitterIcon round size={iconSize} />
            </TwitterShareButton>
            <FacebookShareButton
              url={data.site.siteMetadata.siteUrl + slug}
              quote={`${title} - ${excerpt}`}
              additionalProps={{
                'aria-label': 'Facebook share',
              }}
            >
              <FacebookIcon round size={iconSize} />
              <FacebookShareCount url={data.site.siteMetadata.siteUrl + slug}>
                {count => <div className="share-count">{filter(count)}</div>}
              </FacebookShareCount>
            </FacebookShareButton>
            <PinterestShareButton
              url={data.site.siteMetadata.siteUrl + slug}
              title={title}
              media={data.site.siteMetadata.siteUrl + image}
              additionalProps={{
                'aria-label': 'Pinterest share',
              }}
            >
              <PinterestIcon round size={iconSize} />
              <PinterestShareCount url={data.site.siteMetadata.siteUrl + slug}>
                {count => <div className="share-count">{filter(count)}</div>}
              </PinterestShareCount>
            </PinterestShareButton>
            <LinkedinShareButton
              url={data.site.siteMetadata.siteUrl + slug}
              title={title}
              description={excerpt}
              additionalProps={{
                'aria-label': 'LinkedIn share',
              }}
            >
              <LinkedinIcon round size={iconSize} />
              <LinkedinShareCount url={data.site.siteMetadata.siteUrl + slug}>
                {count => <div className="share-count">{filter(count)}</div>}
              </LinkedinShareCount>
            </LinkedinShareButton>
          </Icons>
        </Wrapper>
      )}
    />
  )
}

export default Share
