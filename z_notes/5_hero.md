https://unsplash.com/

put images in static folder

==

sharp does image transformation

transformer: type of plugin that will look for certain nodes, and will transform data

npm i gatsby-transformer-sharp gatsby-plugin-sharp gatsby-background-image

==

use gatsby to read images from filesystem, and transform images to make them production ready
- sharp will create images at different sizes


==

image: childImageSharp
- rename childImageSharp to image

query {
  allFile(filter: { sourceInstanceName: { eq: "images"}}){
    nodes {
      relativePath
      image: childImageSharp {
        fluid {
          src
          srcSet
        }
      }
    }
  }
}
