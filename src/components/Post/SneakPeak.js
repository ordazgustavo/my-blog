import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  border-top: 1px solid rgb(236, 235, 234);
`

const PrevNextLink = styled(Link)`
  box-shadow: none;
  border-bottom: 0;
  font-weight: bold;
  &.next {
    text-align: right;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 2;
  }
`

const Prev = styled.div`
  display: flex;
  align-items: center;
  margin-left: -1rem;
`

const Next = styled.div`
  display: flex;
  align-items: center;
  margin-right: -1rem;
`

const SneakPeak = ({ next, prev }) => {
  const nextSlug = ((next || {}).fields || {}).slug
  const nextTitle = ((next || {}).frontmatter || {}).title

  const prevSlug = ((prev || {}).fields || {}).slug
  const prevTitle = ((prev || {}).frontmatter || {}).title

  return (
    <Wrapper>
      {prevSlug && (
        <PrevNextLink to={prevSlug}>
          <h4>Anterior</h4>
          <Prev>
            <MdArrowBack />
            <span>{prevTitle}</span>
          </Prev>
        </PrevNextLink>
      )}
      {nextSlug && (
        <PrevNextLink className="next" to={nextSlug}>
          <h4>Siguente</h4>
          <Next>
            <span>{nextTitle}</span>
            <MdArrowForward />
          </Next>
        </PrevNextLink>
      )}
    </Wrapper>
  )
}

SneakPeak.defaultProps = {
  prev: {},
  next: {},
}

export default SneakPeak
