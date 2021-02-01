const fs = require("fs")
const yaml = require("js-yaml")
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const ymlDoc = yaml.load(fs.readFileSync("./content/index.yaml", "utf-8"))
  ymlDoc.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/dynamic-content.tsx"),
      context: {
        pageContent: element.content,
        links: element.links,
      },
    })
  })
}
