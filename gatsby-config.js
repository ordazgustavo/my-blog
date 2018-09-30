const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://blog.ordazgustavo.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    lang: 'es',
    siteUrl,
    title: 'Blog personal de Gustavo Ordaz',
    description:
      'Suelo escribir sobre JavaScript, React y otras tecnologias web del momento 🔥',
    github: 'https://github.com/ordazgustavo/my-blog',
    authorName: 'Gustavo Ordaz',
    authorTwitterAccount: 'ordazsgustavo',
    authorWebsite: 'https://www.ordazgustavo.com',
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
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ['/admin/*'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
   
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    }
  ]
}
