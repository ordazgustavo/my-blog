import styled from 'styled-components'

import { elevation, transition, colors } from '../utilities'

const Card = styled.div`
  background: white;
  border-radius: 15px;
  border: 1px solid rgba(38, 41, 58, 0.1);
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  margin: 40px 0;
  color: ${colors.black};
  overflow: hidden;
  ${elevation[1]};
  ${transition({ property: 'box-shadow' })};
  &:hover {
    ${elevation[2]};
  }
  p {
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.2em;
  }
`

export default Card
