import styled from 'styled-components'

import { elevation, transition, colors } from '../utilities'

const Card = styled.div`
  background: white;
  border-radius: 15px;
  border: 1px solid rgba(38, 41, 58, 0.1);
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  margin: 40px 0;
  overflow: hidden;
  ${elevation[1]};
  ${transition({ property: 'box-shadow' })};
  &:hover {
    ${elevation[2]};
  }
`

export const CardImage = styled.div`
  height: 220px;
  position: relative;
  overflow: hidden;
`

export const CardBody = styled.div`
  padding: 30px;
  color: ${colors.black};
  p {
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.2em;
  }
`
export const CardBodyPost = styled.div`
  padding: 30px;
  color: ${colors.black};
  p,
  li {
    line-height: 1.8em;
    font-size: 21px;
    /* font-family: 'noto serif', serif; */
  }
  blockquote {
    border-left: 4px solid ${colors.gray.light};
    padding-left: 1.45rem;
  }
  blockquote > p {
    color: ${colors.gray.bright};
  }
`

export default Card
