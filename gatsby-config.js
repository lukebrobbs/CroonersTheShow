require('dotenv').config({
  path: `.env.${ process.env.NODE_ENV }`
})

module.exports = {
  siteMetadata: {
    title: 'Crooners',
    siteUrl: 'https://www.croonerstheshow.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONSTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {}
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          // eslint-disable-next-line max-len
          'https://croonerstheshow.us11.list-manage.com/subscribe/post?u=0ca34c813d340053a881e8c79&amp;id=4da641c8ab&amp;f_id=00bc74e1f0'
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#f7b300`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           siteUrl
    //         }
    //       }

    //       allSitePage {
    //         edges {
    //           node {
    //             path
    //           }
    //         }
    //       }
    //   }`,
    //   },
    // },
    { resolve: `gatsby-transformer-remark` }
  ]
}
