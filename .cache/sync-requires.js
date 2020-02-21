const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/tap-prodriguez/Desktop/GitHub/new-portfolio/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/tap-prodriguez/Desktop/GitHub/new-portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/tap-prodriguez/Desktop/GitHub/new-portfolio/src/pages/about.js"))),
  "component---src-pages-design-js": hot(preferDefault(require("/Users/tap-prodriguez/Desktop/GitHub/new-portfolio/src/pages/design.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/tap-prodriguez/Desktop/GitHub/new-portfolio/src/pages/index.js")))
}

