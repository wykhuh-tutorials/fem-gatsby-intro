npm i  gatsby-plugin-webpack-bundle-analyzer

npm run analyze

==

npm run build
- run webpack to generate prod site
- when you hover over link, assets for page are prefetched
- on fast internet connection, it will prefetch on visible links
- modern browsers have built in preload, prefetch

advantage of gatsby
- sites work without javascript
- can work offline with plugin
- loads fast on slow connection

==
dynamic data
- gatsby dynamic routes
- hybrid app
- anything in app directory, treate as regular react app; don't do server side rendering

- wrap entire gatsby app in provider for apollo or axios
- use static data and dynamic calls
- class components - component did mount; hooks - use effects
- build static base; fire compnentDidMount or UseEffect when page loads to fetch dynamic data
-


==

deploy

