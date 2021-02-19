import * as React from "react"

import { graphql } from "gatsby"

import Layout from "components/SiteLayout";
import { SmartList } from "components/SmartList";
import { Tile } from "components/Tile";

const DiscourseUserListPage:React.FC<{data:any}> = ({data}) => {
  return (
    <Layout>
      <SmartList items={data.allPeopleJson.edges.map( (person:any) => person.node)} renderItem={Tile} />
    </Layout>
  )
}

export default DiscourseUserListPage

export const query = graphql`
query {
  allPeopleJson(filter: {}, limit: 100) {
    edges {
      node {
        id
        name
        username
        email
      }
    }
  }
}
`
