import React from 'react'
import PropTypes from 'prop-types'
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
  PinterestIcon
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
      excerpt
    },
    siteUrl
  } = props

  const url = siteUrl + slug
  const media = siteUrl + image

  const iconSize = 36
  const filter = count => (count > 0 ? count : '')

  return (
    <Wrapper>
      <h3>¿Te gustó el post?</h3>
      <p>
        Dedico mucho tiempo y esfuerzo a cada post, recursos y demos, ¡te
        estaría muy agradecido si te tomas un momento para compatirlo!
      </p>
      <Icons>
        <TwitterShareButton
          url={url}
          title={title}
          additionalProps={{
            'aria-label': 'Twitter share'
          }}
        >
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton
          url={url}
          quote={`${title} - ${excerpt}`}
          additionalProps={{
            'aria-label': 'Facebook share'
          }}
        >
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        <PinterestShareButton
          url={url}
          title={title}
          media={media}
          additionalProps={{
            'aria-label': 'Pinterest share'
          }}
        >
          <PinterestIcon round size={iconSize} />
          <PinterestShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </PinterestShareCount>
        </PinterestShareButton>
        <LinkedinShareButton
          url={url}
          title={title}
          description={excerpt}
          additionalProps={{
            'aria-label': 'LinkedIn share'
          }}
        >
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>
            {count => <div className="share-count">{filter(count)}</div>}
          </LinkedinShareCount>
        </LinkedinShareButton>
      </Icons>
    </Wrapper>
  )
}

Share.propTypes = {
  post: PropTypes.object.isRequired
}

export default Share
