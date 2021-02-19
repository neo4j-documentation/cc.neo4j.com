import * as React from "react"

import { graphql, Link } from "gatsby"

import Layout from "components/SiteLayout";
import { LinkCard } from "components/LinkCard";

const SandboxIndexPage:React.FC<{data:any}> = ({data}) => {
  return (
    <Layout title="experiments">
      <h1>
        Experiments
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <LinkCard title="People" detail="" to="/people"/>
        <LinkCard title="GitHub" detail="" to="/experiments/github"/>
        <LinkCard title="Meetup" detail="" to="/experiments/meetups"/>
        <LinkCard title="Graph Gists" detail="" to="/experiments/gists"/>
        <LinkCard title="Training" detail="" to="/experiments/training"/>
        <LinkCard title="Jobs" detail="" to="/experiments/jobs"/>
        <LinkCard title="Time" detail="" to="/experiments/time"/>
      </div>
      
    </Layout>
  )
}

export default SandboxIndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`