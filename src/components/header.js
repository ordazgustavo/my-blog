import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { GoMarkGithub } from 'react-icons/go'
import { FaTwitter } from 'react-icons/fa'
import { FiBook, FiSmartphone, FiCode } from 'react-icons/fi'

import { media, colors } from '../utilities'

const HeaderWrapper = styled.div`
  background: ${colors.maastrichtBlue};
  margin-bottom: 1.45rem;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
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
  border-top: 1px solid ${colors.gray.calm};
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

const MobileNavItem = ({ linkTo, label, Icon }) => {
  const I = styled(Icon)`
    font-size: 30px;
  `
  return (
    <MobileNavLink to={linkTo}>
      <I /> <div>{label}</div>
    </MobileNavLink>
  )
}

class Header extends Component {
  render() {
    const { location } = this.props
    return (
      <StaticQuery
        query={graphql`
          query HeaderQuery {
            site {
              siteMetadata {
                github
                authorName
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
        render={({ site, logo, background }) => (
          <HeaderWrapper isHome={location.pathname === '/'}>
            <HeaderContainer>
              <HeaderLogo>
                <Link to="/" aria-label="Volver al inicio">
                  <Img
                    style={{
                      width: 80
                    }}
                    fluid={logo.fluid}
                  />
                  <span>{site.siteMetadata.authorName}</span>
                </Link>
              </HeaderLogo>
              <MainNav>
                <Nav>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about/">Acerca</Link>
                  </li>
                  <li>
                    <Link to="/contact/">Contacto</Link>
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
            />
            <MobileNavigation>
              <MobileNavItem linkTo="/" label="Blog" Icon={FiBook} />
              <MobileNavItem linkTo="/about/" label="Acerca" Icon={FiCode} />
              <MobileNavItem
                linkTo="/contact/"
                label="Contacto"
                Icon={FiSmartphone}
              />
            </MobileNavigation>
          </HeaderWrapper>
        )}
      />
    )
  }
}

export default Header
