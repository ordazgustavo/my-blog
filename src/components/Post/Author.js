import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  margin: 40px 0;
  padding: 40px 0;
  border-top: 1px solid rgb(236, 235, 234);
  border-bottom: 1px solid rgb(236, 235, 234);
  h3,
  p {
    margin: 0;
  }
`

const Author = ({ name, twitter, note, image }) => (
  <Wrapper>
    <div>
      <Img
        style={{ width: '70px', borderRadius: '50%', marginRight: '15px' }}
        fluid={image.fluid}
      />
    </div>
    <div>
      <h3>{name}</h3>
      <div dangerouslySetInnerHTML={{ __html: note.html }} />
      <a
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        @{twitter}
      </a>
    </div>
  </Wrapper>
)

export default Author
