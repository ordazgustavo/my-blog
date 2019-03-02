import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { FiCode, FiBook, FiSmartphone } from 'react-icons/fi'

import { media } from '../utilities'

import Header from './Header'
import Seo from './Seo/Seo'
import { MobileNav, MobileNavItem } from './Nav/MobileNav/MobileNav'
import Footer from './Footer/Footer'

const Main = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - 33vh);
  max-width: ${({ isHome }) => (isHome ? '650px' : '750px')};
  padding: 0px 1.0875rem 3rem;
  padding-top: 0px;
  box-sizing: content-box;
  ${media.tablet`
    padding: 0px 1.0875rem 1.45rem;
  `};
`

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        lang
        siteUrl
        title
        description
        authorName
        authorTwitterAccount
        authorWebsite
        github
        image
      }
    }
  }
`

const Layout = ({ children, meta, location }) => (
  <StaticQuery query={query}>
    {data => (
      <>
        <Seo {...data} meta={meta || null} />
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <Main isHome={location.pathname === '/'}>{children}</Main>
        <MobileNav>
          <MobileNavItem
            linkTo="/about/"
            label="Acerca"
            icon={FiCode}
            title="Acerca"
          />
          <MobileNavItem linkTo="/" label="Blog" icon={FiBook} title="Inicio" />
          <MobileNavItem
            linkTo="/contact/"
            label="Contacto"
            icon={FiSmartphone}
            title="Contacto"
          />
        </MobileNav>
        <Footer {...data} />
      </>
    )}
  </StaticQuery>
)

export default Layout
