import * as React from "react"

import Layout from "components/SiteLayout";
import { ActivityStream } from "components/ActivityStream";
import { Card } from "components/Card";
import { ActivityCalendar } from "components/ActivityCalendar";

import { DateTime } from "luxon";
import { range, flatten } from "fp-ts/lib/Array";

let from = DateTime.fromISO("2010-01-01");

const sampleData = (year:number) => flatten(range(1,12).map( month => 
  { return range(1,30).map(dayOfMonth => 
    ({day:`${year}-${new String(month).padStart(2,'0')}-${new String(dayOfMonth).padStart(2,'0')}`, value: Math.floor(Math.random() * 100 )})
  )
  }))


const EventStreamsPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-2">
      <Card title="Activity Stream">
        <ActivityStream />
      </Card>
      <Card title="Activity Calendar">
        <ActivityCalendar data={sampleData(2020)} />
      </Card>
      </div>
    </Layout>
  )
}

export default EventStreamsPage
