import React, { PureComponent } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Spring, animated } from 'react-spring'
import { GoMarkGithub } from 'react-icons/go'
import { FaTwitter } from 'react-icons/fa'
import { FiBook, FiSmartphone, FiCode } from 'react-icons/fi'

import { media, colors } from '../utilities'

const HeaderWrapper = styled(animated.div).attrs({
  style: ({ height }) => ({
    height: height.interpolate(h => h)
  })
})`
  background: ${colors.maastrichtBlue};
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: stretch;
  position: relative;
  z-index: 2;
`

const HeaderLogo = styled.h1`
  margin: 0 15px 0 0;
  ${media.tablet`
    flex-grow: 0;
  `} a {
    text-decoration: 'none';
  }
  span {
    display: block;
    transform: translateY(-999px);
    position: absolute;
  }
`

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  ${media.tablet`
    flex-grow: 1;
  `} ul {
    margin: 0;
    list-style: none;
    li {
      margin: 0 10px;
      a {
        cursor: pointer;
        text-decoration: none;
        color: ${colors.greenSheen};
        transition: color 0.3s ease-in;
        &:hover {
          color: ${colors.tealBlue};
        }
      }
    }
  }
`

const Nav = styled.ul`
  display: none;
  ${media.tablet`
    display: flex;
  `};
`

const SiteTitle = styled(animated.div).attrs({
  style: ({ opacity }) => ({
    opacity: opacity.interpolate(o => o)
  })
})`
  height: 70%;
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h2 {
    font-size: 2.5rem;
    color: ${colors.greenSheen};
  }
  h3 {
    color: ${colors.azureishWhite};
  }
  h2,
  h3 {
    z-index: 1;
  }
`

const Icons = styled.ul`
  display: flex;
`

const MobileNavigation = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-top: 1px solid ${colors.gray.light};
  background: ${colors.azureishWhite};
  ${media.tablet`
    display: none;
  `};
`

const MobileNavLink = styled(Link)`
  letter-spacing: 0.0075rem;
  line-height: 1;
  text-align: center;
  padding: 10px;
  div {
    font-size: 10px;
  }
`

const MobileNavItem = ({ linkTo, label, icon, ...rest }) => {
  const I = styled(icon)`
    font-size: 30px;
  `
  return (
    <MobileNavLink to={linkTo} {...rest}>
      <I /> <div>{label}</div>
    </MobileNavLink>
  )
}

class Header extends PureComponent {
  state = {
    shouldAnimate: true
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (prevProps.location.pathname !== location.pathname) {
      if (location.pathname === '/') {
        this.setState({
          shouldAnimate: true
        })
      } else {
        this.setState({
          shouldAnimate: false
        })
      }
    }
  }

  render() {
    const { location } = this.props
    const { shouldAnimate } = this.state
    const isHome = location.pathname === '/'

    return (
      <StaticQuery
        query={graphql`
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
            logo: imageSharp(
              fluid: { originalName: { regex: "/OGLight.png/" } }
            ) {
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
        `}
      >
        {({ site, logo, background }) => (
          <Spring
            native
            from={{ height: '20vh', opacity: 0 }}
            to={{ height: '70vh', opacity: 1 }}
            reverse={!isHome}
            reset={shouldAnimate}
          >
            {({ height, opacity }) => (
              <HeaderWrapper height={height}>
                <HeaderContainer>
                  <HeaderLogo>
                    <Link to="/" title="Inicio" aria-label="Volver al inicio">
                      <Img
                        style={{
                          width: 80
                        }}
                        fluid={logo.fluid}
                      />
                      <span>{site.siteMetadata.title}</span>
                    </Link>
                  </HeaderLogo>
                  <MainNav>
                    <Nav>
                      <li>
                        <Link to="/" title="Inicio">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/" title="Acerca">
                          Acerca
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact/" title="Contacto">
                          Contacto
                        </Link>
                      </li>
                    </Nav>
                    <Icons>
                      <li>
                        <a
                          href={site.siteMetadata.github}
                          title="GitHub"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GoMarkGithub />
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://twitter.com/${
                            site.siteMetadata.authorTwitterAccount
                          }`}
                          title={`@${site.siteMetadata.authorTwitterAccount}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href={site.siteMetadata.authorWebsite}
                          title="Mi página"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          .com
                        </a>
                      </li>
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
                    opacity: '0.3'
                  }}
                  fluid={background.fluid}
                  alt=""
                />
                <SiteTitle opacity={opacity}>
                  <h2>{site.siteMetadata.title}</h2>
                  <h3>{site.siteMetadata.description}</h3>
                </SiteTitle>
                <MobileNavigation>
                  <MobileNavItem
                    linkTo="/about/"
                    label="Acerca"
                    icon={FiCode}
                    title="Acerca"
                  />
                  <MobileNavItem
                    linkTo="/"
                    label="Blog"
                    icon={FiBook}
                    title="Inicio"
                  />
                  <MobileNavItem
                    linkTo="/contact/"
                    label="Contacto"
                    icon={FiSmartphone}
                    title="Contacto"
                  />
                </MobileNavigation>
              </HeaderWrapper>
            )}
          </Spring>
        )}
      </StaticQuery>
    )
  }
}

export default Header
