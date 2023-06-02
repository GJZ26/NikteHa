import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'

import dataA from '../data/fakeInfo.json'
import dataB from '../data/DBO.json'

import LineChart from '@/components/LineChart'
import BarChart from '@/components/BarChart'

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


  for (const i in dataA) {
    if (dataA[i].date.includes("Jan")) dataByMonth["Jan"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Feb")) dataByMonth["Feb"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Mar")) dataByMonth["Mar"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Apr")) dataByMonth["Apr"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("May")) dataByMonth["May"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Jun")) dataByMonth["Jun"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Jul")) dataByMonth["Jul"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Aug")) dataByMonth["Aug"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Sep")) dataByMonth["Sep"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Oct")) dataByMonth["Oct"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Nov")) dataByMonth["Nov"].push(dataA[i].cetimeter)
    if (dataA[i].date.includes("Dec")) dataByMonth["Dec"].push(dataA[i].cetimeter)
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
      <Navbar />
      <div className='pt-16  h-screen w-full max-w-sm'>
        <LineChart
          title="Flujo de agua en 2022"
          data={dataInfo}
          label={label}
          um="cm cúbicos"
        />
        <BarChart
          title="DBO en aguas residuales"
          data={dataB.data}
          label={dataB.label}
          um="mg/l"
        >
        </BarChart>
      </div>
    </>
  )
}
