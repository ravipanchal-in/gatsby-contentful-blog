const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Lorem Ipsum`,
    description:
      "Excepteur esse sit esse sunt ullamco sint. Voluptate tempor cupidatat duis velit officia non Lorem non ex ut. Nulla qui nostrud cupidatat proident culpa velit qui officia minim aliquip.",
  },

  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "o0thwaf9u2o7",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
