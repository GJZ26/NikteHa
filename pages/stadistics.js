import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'

import data from '../data/fakeInfo.json'
import LineChart from '@/components/LineChart'

export default function stadistics() {
  const dataInfo = []
  const label = []
  const dataByMonth = {
    "Jan": [],
    "Feb": [],
    "Mar": [],
    "Apr": [],
    "May": [],
    "Jun": [],
    "Jul": [],
    "Aug": [],
    "Sep": [],
    "Oct": [],
    "Nov": [],
    "Dec": []
  }


  for (const i in data) {
    if (data[i].date.includes("Jan")) dataByMonth["Jan"].push(data[i].cetimeter)
    if (data[i].date.includes("Feb")) dataByMonth["Feb"].push(data[i].cetimeter)
    if (data[i].date.includes("Mar")) dataByMonth["Mar"].push(data[i].cetimeter)
    if (data[i].date.includes("Apr")) dataByMonth["Apr"].push(data[i].cetimeter)
    if (data[i].date.includes("May")) dataByMonth["May"].push(data[i].cetimeter)
    if (data[i].date.includes("Jun")) dataByMonth["Jun"].push(data[i].cetimeter)
    if (data[i].date.includes("Jul")) dataByMonth["Jul"].push(data[i].cetimeter)
    if (data[i].date.includes("Aug")) dataByMonth["Aug"].push(data[i].cetimeter)
    if (data[i].date.includes("Sep")) dataByMonth["Sep"].push(data[i].cetimeter)
    if (data[i].date.includes("Oct")) dataByMonth["Oct"].push(data[i].cetimeter)
    if (data[i].date.includes("Nov")) dataByMonth["Nov"].push(data[i].cetimeter)
    if (data[i].date.includes("Dec")) dataByMonth["Dec"].push(data[i].cetimeter)
  }

  for (const j in dataByMonth) {
    let result = 0
    for (const k in dataByMonth[j]) {
      result += dataByMonth[j][k]
    }
    label.push(j)
    dataInfo.push(result / dataByMonth[j].length)
  }

  return (
    <>
      <Head>
        <title>Nikte Ha! | Estadisticas</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      {/* <Navbar /> */}
      <LineChart
        title="Flujo de agua en 2022"
        data={dataInfo}
        label={label}
      />
    </>
  )
}
