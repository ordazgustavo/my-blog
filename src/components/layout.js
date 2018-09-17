import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Seo from './Seo/Seo'
import './layout.css'

const Layout = ({ children, meta, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            lang
            url
            title
            description
            authorName
            authorTwitterAccount
            image
          }
        }
        background: imageSharp(
          fluid: { originalName: { regex: "/headerbg.png/" } }
        ) {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => (
      <>
        <Seo {...data} meta={meta || null} />
        <Header
          siteTitle={data.site.siteMetadata.title}
          location={location}
          image={data.background}
        />
        <main
          style={{
            margin: '0 auto',
            maxWidth: 700,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            boxSizing: 'content-box',
          }}
        >
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
