import styled from 'styled-components'
import { animated } from 'react-spring'

import { media, colors } from '../../../utilities'

const HeaderWrapper = styled(animated.div)`
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
  a {
    text-decoration: 'none';
  }
  span {
    display: block;
    transform: translateY(-999px);
    position: absolute;
  }
  ${media.tablet`
    flex-grow: 0;
  `};
`

export { HeaderWrapper, HeaderContainer, HeaderLogo }
