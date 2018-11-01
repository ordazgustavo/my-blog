import React from 'react'
import styled from 'styled-components'
import { GoMarkGithub } from 'react-icons/go'
import { FaTwitter } from 'react-icons/fa'

import { colors, media } from '../../utilities'
import { Icons, IconNav } from '../Nav/Nav'

const FooterWrapper = styled.div`
  background-color: ${colors.maastrichtBlue};
  color: ${colors.azureishWhite};
  font-size: 0.8rem;
  position: sticky;
  margin-bottom: 62px;
  ${media.tablet`
    margin-bottom: unset;
  `};
`

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  ul {
    margin: 0;
    list-style: none;
    li {
      margin: 0 10px;
      text-transform: uppercase;
    }
  }
`

function Footer({ site }) {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div>&copy; 2018 {site.siteMetadata.authorName}.</div>
        <Icons>
          <IconNav to={site.siteMetadata.github} title="GitHub">
            <GoMarkGithub />
          </IconNav>
          <IconNav
            to={`https://twitter.com/${site.siteMetadata.authorTwitterAccount}`}
            title={`@${site.siteMetadata.authorTwitterAccount}`}
          >
            <FaTwitter />
          </IconNav>
          <IconNav to={site.siteMetadata.authorWebsite} title="Mi página">
            .com
          </IconNav>
        </Icons>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
