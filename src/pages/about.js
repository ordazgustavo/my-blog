import React, { Component } from 'react'

import Layout from '../components/layout'

export default class About extends Component {
  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam
          corrupti, nisi odio cupiditate sint! Quis, corrupti iste culpa ex
          iusto dolore error, similique earum eum natus molestiae, omnis
          suscipit?
        </p>
      </Layout>
    )
  }
}
