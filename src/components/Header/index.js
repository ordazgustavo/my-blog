import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring } from 'react-spring'
import { GoMarkGithub } from 'react-icons/go'
import { FaTwitter } from 'react-icons/fa'

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
} from './HeaderItems/HeaderItems'
import { Nav, MainNav, NavItem, Icons, IconNav } from '../Nav/Nav'
import SiteTitle from '../SiteTitle/SiteTitle'

const query = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
        description
        github
        authorWebsite
        authorTwitterAccount
      }
    }
    logo: imageSharp(fluid: { originalName: { regex: "/OGLight.png/" } }) {
      fluid(maxWidth: 90) {
        ...GatsbyImageSharpFluid
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
`

function Header({ location }) {
  const [shouldAnimate, setShouldAnimate] = React.useState(true)
  const [prevLocation, setPrevLocation] = React.useState(location.pathname)
  const isHome = location.pathname === '/'

  const { height, opacity } = useSpring({
    native: true,
    from: { height: '20vh', opacity: 0 },
    to: { height: '70vh', opacity: 1 },
    reverse: !isHome,
    reset: shouldAnimate,
  })

  React.useEffect(() => {
    if (prevLocation !== location.pathname && location.pathname === '/') {
      setShouldAnimate(true)
      setPrevLocation(location.pathname)
    } else {
      setShouldAnimate(false)
    }
  }, [location.pathname])

  return (
    <StaticQuery query={query}>
      {({ site, logo, background }) => (
        <HeaderWrapper style={{ height }}>
          <HeaderContainer>
            <HeaderLogo>
              <Link to="/" title="Inicio" aria-label="Volver al inicio">
                <Img
                  style={{
                    width: 80,
                  }}
                  fluid={logo.fluid}
                />
                <span>{site.siteMetadata.title}</span>
              </Link>
            </HeaderLogo>
            <MainNav>
              <Nav>
                <NavItem to="/" title="Inicio">
                  Blog
                </NavItem>
                <NavItem to="/about/" title="Acerca">
                  Acerca
                </NavItem>
                <NavItem to="/contact/" title="Contacto">
                  Contacto
                </NavItem>
              </Nav>
              <Icons>
                <IconNav to={site.siteMetadata.github} title="GitHub">
                  <GoMarkGithub />
                </IconNav>
                <IconNav
                  to={`https://twitter.com/${
                    site.siteMetadata.authorTwitterAccount
                  }`}
                  title={`@${site.siteMetadata.authorTwitterAccount}`}
                >
                  <FaTwitter />
                </IconNav>
                <IconNav to={site.siteMetadata.authorWebsite} title="Mi página">
                  .com
                </IconNav>
              </Icons>
            </MainNav>
          </HeaderContainer>
          <Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              opacity: '0.3',
            }}
            fluid={background.fluid}
            alt=""
          />
          <SiteTitle style={{ opacity }}>
            <h2>{site.siteMetadata.title}</h2>
            <h3>{site.siteMetadata.description}</h3>
          </SiteTitle>
        </HeaderWrapper>
      )}
    </StaticQuery>
  )
}

export default Header
