module.exports = {
  siteMetadata: {
    title: 'Gatsby workshop',
    description: 'a demo site built for workshop',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        // load all mdx files into the layout template
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        }
      }
    }
  ],
}
