import React, { useEffect } from "react";
import * as echarts from "echarts";
import { LineGraphProps } from "../types/ItemType";

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  useEffect(() => {
    // Extract data
    const { cases, deaths, recovered } = data;
    const dates = Object.keys(cases);
    const casesData = dates.map((date) => ({ date, value: cases[date] }));
    const deathsData = dates.map((date) => ({ date, value: deaths[date] }));
    const recoveredData = dates.map((date) => ({
      date,
      value: recovered[date],
    }));

    // Initialize chart
    const chartDom = document.getElementById("chart") as HTMLElement;
    const myChart = echarts.init(chartDom);

    // Configure chart options
    const option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Cases", "Deaths", "Recovered"],
      },
      xAxis: {
        type: "category",
        data: dates,
        axisLabel: {
          color: "black",
        },
      },
      yAxis: {
        type: "value",
        min: 0,
        axisLabel: {
          color: "black",
          formatter: (value: number) =>
            value >= 1e9
              ? (value / 1e9).toFixed(0) + "B"
              : value >= 1e6
              ? (value / 1e6).toFixed(0) + "M"
              : value >= 1e3
              ? (value / 1e3).toFixed(0) + "K"
              : value,
        },
      },
      series: [
        {
          name: "Cases",
          type: "line",
          data: casesData.map((item) => item.value),
        },
        {
          name: "Deaths",
          type: "line",
          data: deathsData.map((item) => item.value),
          lineStyle: {
            color: "#ff0000",
          },
          itemStyle: {
            color: "#ff0000",
          },
        },
        {
          name: "Recovered",
          type: "line",
          data: recoveredData.map((item) => item.value),
          lineStyle: {
            color: "#08FF40",
          },
          itemStyle: {
            color: "#08FF40",
          },
        },
      ],
    };

    myChart.setOption(option);

    // Resize the chart when the window is resized
    const resizeHandler = () => {
      myChart.resize();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      // Cleanup: Remove event listener and dispose the chart instance
      window.removeEventListener("resize", resizeHandler);
      myChart.dispose();
    };
  }, [data]); // Update chart when data changes

  return (
    <div
      id="chart"
      className="w-full h-full bg-white"
      style={{ width: "63vw", height: "520px" }} // Initial width and height
    ></div>
  );
};

export default LineGraph;
