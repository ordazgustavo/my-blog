module.exports = {
  siteMetadata: {
    lang: 'es',
    url: 'https://blogordazgustavo.netlify.com',
    title: 'Gustavo Ordaz',
    description: 'This is my blog',
    github: 'https://github.com/ordazgustavo/my-blog',
    authorName: 'Gustavo Ordaz',
    authorTwitterAccount: 'ordazsgustavo',
    authorWebsite: 'https://ordazgustavo.netlify.com',
    image: 'src/images/OGLogo.png'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gustavo Ordaz Blog',
        short_name: 'OG Blog',
        start_url: '/',
        background_color: '#468189',
        theme_color: '#031926',
        display: 'standalone',
        icon: 'src/images/OGLogo.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: { sh: 'bash' }
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    }
  ]
}
