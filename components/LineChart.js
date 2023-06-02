import Navbar from '@/components/Navbar'
import Head from 'next/head'

import React from "react";
import Chart from "chart.js";

export default function LineChart(props) {
    React.useEffect(() => {
      var config = {
        type: "line",
        data: {
          labels: props.label,
          datasets: [
            {
              label: props.um,
              backgroundColor: "#3182ce",
              borderColor: "#0B8892",
              data: props.data,
              fill: false,
            }
          ]
        }
      };
      var ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    }, []);
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h2 className="text-black text-xl font-lato">{props.title}</h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-350-px">
              <canvas id="line-chart"></canvas>
            </div>
          </div>
        </div>
      </>
    );
}