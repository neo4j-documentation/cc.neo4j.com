import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { Tile } from "components/Tile";

const GithubRepoListPage:React.FC<{data:any}> = ({data}) => {
  return (
    <Layout title="projects">
      <SmartList items={data.allProjectsJson.edges.map( (repo:any) => ({id:repo.node.nameWithOwner}) )} renderItem={Tile} />
    </Layout>
  )
}

export default GithubRepoListPage


export const query = graphql`
query {
  allProjectsJson(filter: {}, limit: 100) {
    edges {
      node {
        id
        nameWithOwner
        owner {
          login
        }
      }
    }
  }
}
`