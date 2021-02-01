import * as React from "react"

import Layout from "../templates/shell";

const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <h1>
        Congratulations
      </h1>
      <h2 className="font-neo4j prose-xl">Neo4j Font</h2>
      <h2 className="font-sans prose-xl">Sans Font</h2>
      <h2 className="font-mono prose-xl">Mono Font</h2>
      <h2 className="font-serif prose-xl">Serif Font</h2>
    </Layout>
  )
}

export default IndexPage
