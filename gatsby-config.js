module.exports = {
  siteMetadata: {
    title: `Jacob Website`,
    author: `Jacob Cofman`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-webpack-bundle-analyzer",
    "@jacobmischka/gatsby-plugin-react-svg",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    }
  ]
};
