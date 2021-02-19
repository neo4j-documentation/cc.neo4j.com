import * as React from "react"

import Layout from "components/SiteLayout";
import { ActivityStream } from "components/ActivityStream";
import { Card } from "components/Card";

const IndexPage = () => {
  return (
    <Layout>
      <Card title="Activity">
        <ActivityStream />
      </Card>
    </Layout>
  )
}

export default IndexPage
