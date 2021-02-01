const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-1192232-34",
      },
    },
    "gatsby-plugin-react-helmet",{
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/default-page-layout.tsx"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // url: API URL to use. Defaults to  https://api.github.com/graphql
        // url: someUrl,
  
        // token: required by the GitHub API (ABKTODO: use dotenv!)
        token: process.env.GITHUB_TOKEN,
  
        // GraphQLquery: defaults to a search query
        graphQLQuery: `
        query {
          repository(owner:"gram-data",name:"gram-js"){
            description
          }
        }
        `,
        // variables: defaults to variables needed for a search query
        variables: {}
      }
    },
    {
      resolve: `gatsby-source-meetup`,
      options: {
        // Learn about environment variables: https://gatsby.app/env-vars
        // Your Meetup.com API key can be retrieved here: https://secure.meetup.com/fr-FR/meetup_api/key/
        apiKey: process.env.MEETUP_API_KEY,
        // Mandatory: the URL name of a Meetup Group.
        // See the URL of the group page, e.g. https://www.meetup.com/fr-FR/jamstack-paris
        groupUrlName: "jamstack-paris",
        // Optional parameters for retrieving Events, see full documentation at
        // https://www.meetup.com/meetup_api/docs/:urlname/events/?uri=%2Fmeetup_api%2Fdocs%2F%3Aurlname%2Fevents%2F#list
        status: "upcoming,past",
        desc: "true",
        page: 10
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        'components': path.join(__dirname, 'src/components'),
        'pages': path.join(__dirname, 'src/pages')
      }
    }
  ],
  siteMetadata: {
    siteUrl: `https://developer.neo4j.com`,
  },

};
