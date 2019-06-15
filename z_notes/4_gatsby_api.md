Gatsby exposes api for node, browser, server side rendering
- add a function that has the name of hook
- gatsby will execute that function during a phase during the build

==

retrieve graphql items using query variables
- ! means required
- code { body } returns mdx code

{
  "slug": "hello-world"
}

query($slug: String!) {
  mdx(frontmatter: { slug: { eq: $slug } }) {
    frontmatter {
      title
      author
    }
  }
  code {
    body
  }
}
