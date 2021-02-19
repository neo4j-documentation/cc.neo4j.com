import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { Tile } from "components/Tile";

const GraphGistListPage:React.FC<{data:any}> = ({data}) => {
  return (
    <Layout title="gists">
      <SmartList items={data.allGistsJson.edges.map( (gist:any) => (gist.node)) } renderItem={Tile} />
    </Layout>
  )
}

export default GraphGistListPage

export const query = graphql`
query {
  allGistsJson(limit: 100) {
    edges {
      node {
        title
        id
      }
    }
  }
}
`