import React from "react"
import YAMLData from "../../content/My-YAML-Content.yaml"
import Layout from "../templates/shell";

const YAMLbuildtime = () => (
  <Layout>
    <h1>{YAMLData.title}</h1>
    <ul className={`bg-pink-400`}>
      {YAMLData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </Layout>
)
export default YAMLbuildtime