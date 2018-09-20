import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const SneakPeak = props => {
  const {
    next: {
      fields: { slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {}
    } = {},
    prev: {
      fields: { slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {}
    } = {}
  } = props

  return (
    <Wrapper>
      {nextSlug && (
        <Link to={nextSlug}>
          <h4>{nextTitle}</h4>
        </Link>
      )}
      {prevSlug && (
        <Link to={prevSlug}>
          <h4>{prevTitle}</h4>
        </Link>
      )}
    </Wrapper>
  )
}

SneakPeak.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object
}

export default SneakPeak
