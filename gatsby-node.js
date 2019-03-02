const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2')

exports.onCreateNode = ({ node, getNode, actions }) => {
  fmImagesToRelative(node)
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const separtorIndex = ~slug.indexOf('--') ? slug.indexOf('--') : 0
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0
    createNodeField({
      node,
      name: `slug`,
      value: `${separtorIndex ? '/' : ''}${slug.substring(shortSlugStart)}`,
    })
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : '',
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/Post.js')
    const pageTemplate = path.resolve('./src/templates/Page.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fileAbsolutePath
                  fields {
                    slug
                    prefix
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const items = result.data.allMarkdownRemark.edges

        // Create posts
        const posts = items.filter(item =>
          /posts/.test(item.node.fileAbsolutePath),
        )
        posts.forEach(({ node }, index) => {
          const { slug } = node.fields
          const next = index === 0 ? null : posts[index - 1].node
          const prev = index === posts.length - 1 ? null : posts[index + 1].node

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              prev,
              next,
            },
          })
        })

        // and pages.
        const pages = items.filter(item =>
          /pages/.test(item.node.fileAbsolutePath),
        )
        pages.forEach(({ node }) => {
          const { slug } = node.fields

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
            },
          })
        })
      }),
    )
  })
}
