import styled from 'styled-components'
import { animated } from 'react-spring'

import { colors } from '../../utilities'

const SiteTitle = styled(animated.div)`
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

export default SiteTitle
