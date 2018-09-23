import React from 'react'
import PropTypes from 'prop-types'
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
  h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: normal;
    line-height: 1;
  }
  span {
    margin-left: -1rem;
    margin-right: -1rem;
  }
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
          <span>
            <MdArrowBack />
            {prevTitle}
          </span>
        </PrevNextLink>
      )}
      {nextSlug && (
        <PrevNextLink to={nextSlug}>
          <h4 style={{ textAlign: 'right' }}>Siguente</h4>
          <span>
            {nextTitle}
            <MdArrowForward />
          </span>
        </PrevNextLink>
      )}
    </Wrapper>
  )
}

SneakPeak.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object
}

export default SneakPeak
