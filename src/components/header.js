import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/OGLight.png'

const HeaderWrapper = styled.div`
  background: #031926;
  margin-bottom: 1.45rem;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
  overflow: hidden;
  position: relative;
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 10px;
      a {
        text-decoration: none;
        color: #77aca2;
        transition: color 0.3s ease-in;
        &:hover {
          color: #468189;
        }
      }
    }
  }
`

class Header extends Component {
  render() {
    const { location, image } = this.props
    return (
      <HeaderWrapper isHome={location.pathname === '/'}>
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="Site Logo" />
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
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
          fluid={image.fluid}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
