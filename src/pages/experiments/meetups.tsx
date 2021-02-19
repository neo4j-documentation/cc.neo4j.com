import * as React from "react"

import { graphql } from "gatsby";

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { Tile } from "components/Tile";

const MeetupListPage:React.FC<{data:any}> = ({data}) => {
  return (
    <Layout>
      <SmartList items={data.allMeetupsJson.edges.map( (meetup:any) => `${meetup.node.id}`)} renderItem={Tile} />
    </Layout>
  )
}

export default MeetupListPage


export const query = graphql`
query {
  allMeetupsJson(limit: 100) {
    edges {
      node {
        id
        properties {
          link
        }
      }
    }
  }
}
`