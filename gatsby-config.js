module.exports = {
  siteMetadata: {
    title: 'Gatsby workshop',
    description: 'a demo site built for workshop',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-mdx',
      options: {
        // load all mdx files into the layout template
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js')
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      }
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'gatsbyjs'
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        // run on production bundle
        production: true,
        // only run if envar is set
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      }
    }
  ],
}
