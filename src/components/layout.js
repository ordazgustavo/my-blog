import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { media } from '../utilities'

import Header from './header'
import Seo from './Seo/Seo'

const Main = styled.main`
  margin: 0 auto;
  max-width: 700px;
  padding: 0px 1.0875rem 3rem;
  padding-top: 0px;
  box-sizing: content-box;
  ${media.tablet`
    padding: 0px 1.0875rem 1.45rem;
  `};
`

const Layout = ({ children, meta, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            lang
            siteUrl
            title
            description
            authorName
            authorTwitterAccount
            image
          }
        }
      }
    `}
  >
    {data => (
      <>
        <Seo {...data} meta={meta || null} />
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <Main>{children}</Main>
      </>
    )}
  </StaticQuery>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
