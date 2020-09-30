/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as chartjs from "chart.js";
import cloneDeep from "lodash.clonedeep";
import React from "react";
import { ChartData, Line } from "react-chartjs-2";

import filterColumns from "./filterColumns";
import getStudiedData, { PlotData } from "./getStudiedData";

import { Period, StudiedIntervals } from "../area/Area.interface";
import { Column } from "../form/Data.interface";
import theme from "../styles/theme";

interface Props {
  columns: Column[];
  studiedIntervals: StudiedIntervals;
  period: Period;
}

const { beige, orange, yellow, chartRed, chartBlue } = theme.colors;

const Charts: React.FC<Props> = (props: Props) => {
  const { columns, studiedIntervals, period } = props;

  // only keep the valid and completed columns
  const { ages, expectedWeights, measuredWeights } = filterColumns(columns);

  let definitiveExpectedWeights = cloneDeep(expectedWeights);
  let definitiveMeasuredWeights = cloneDeep(measuredWeights);

  let studiedDatasetExpected: PlotData[] = [];
  let studiedDatasetMeasured: PlotData[] = [];
  if (period.isPeriodValid) {
    const studiedData = getStudiedData(
      ages,
      expectedWeights,
      measuredWeights,
      period,
      studiedIntervals
    );
    const {
      studiedDataExpected,
      studiedDataMeasured,
      updatedExpectedWeights,
      updatedMeasuredWeights,
    } = studiedData;
    studiedDatasetExpected = studiedDataExpected;
    studiedDatasetMeasured = studiedDataMeasured;
    definitiveExpectedWeights = cloneDeep(updatedExpectedWeights);
    definitiveMeasuredWeights = cloneDeep(updatedMeasuredWeights);
  }

  const expectedWeightsData = definitiveExpectedWeights.map((weight, index) => {
    return { x: ages[index], y: weight };
  });

  const measuredWeightsData = definitiveMeasuredWeights.map((weight, index) => {
    return { x: ages[index], y: weight };
  });

  const baseDatasets = [
    {
      // y coordinates
      data: studiedDatasetExpected,
      label: "Intervalle étudié haut",
      backgroundColor: orange, // legend

      fill: +1,

      borderColor: "black",
      borderWidth: 2,

      pointBackgroundColor: orange,
      pointBorderColor: "black",
      pointBorderWidth: 2,
      pointRadius: 4,

      pointHitRadius: 10,

      // straight line
      lineTension: 0,

      // axis references
      xAxisID: "x-axis",
      yAxisID: "y-axis",

      order: 0,
    },
    {
      // y coordinates
      data: studiedDatasetMeasured,
      label: "Intervalle étudié bas",
      backgroundColor: beige, // legend

      fill: false,

      borderColor: "black",
      borderWidth: 2,

      pointBackgroundColor: orange,
      pointBorderColor: "black",
      pointBorderWidth: 2,
      pointRadius: 4,

      pointHitRadius: 10,

      // straight line
      lineTension: 0,

      // axis references
      xAxisID: "x-axis",
      yAxisID: "y-axis",

      order: 1,
    },
    {
      // y coordinates
      data: expectedWeightsData,
      label: "Poids attendu",
      backgroundColor: yellow, // legend

      fill: 3,

      borderColor: "black",
      borderWidth: 2,

      pointBackgroundColor: chartBlue,
      pointBorderColor: "black",
      pointBorderWidth: 2,
      pointRadius: 4,

      pointHitRadius: 10,

      // straight line
      lineTension: 0,

      // axis references
      xAxisID: "x-axis",
      yAxisID: "y-axis",

      order: 2,
    },
    {
      // y coordinates
      data: measuredWeightsData,
      label: "Poids mesuré",

      fill: false,

      backgroundColor: chartRed,
      borderColor: "black",
      borderWidth: 2,

      pointBackgroundColor: chartRed,
      pointBorderColor: "black",
      pointBorderWidth: 2,
      pointRadius: 4,

      pointHitRadius: 10,

      lineTension: 0,

      // axis references
      xAxisID: "x-axis",
      yAxisID: "y-axis",

      order: 3,
    },
  ];

  const dataToRender: ChartData<chartjs.ChartData> = {
    datasets: [...baseDatasets],
  };

  return (
    <Line
      data={dataToRender}
      options={{
        // aspectRatio: 1,
        maintainAspectRatio: true,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
          mode: "x",
        },
        layout: {
          padding: {
            left: -10,
            right: 30,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          yAxes: [
            {
              id: "y-axis",
              // type: "linear",
              scaleLabel: {
                display: true,
              },
              ticks: {
                autoSkip: true,
                // suggestedMin: 10,
                // suggestedMax: 40,
                maxTicksLimit: 6,
              },
            },
          ],
          xAxes: [
            {
              id: "x-axis",
              type: "linear" /* <--- this */,
              scaleLabel: {
                display: true,
              },
              ticks: {
                autoSkip: true,
                // suggestedMin: 5,
                // suggestedMax: 15,
                maxTicksLimit: 10,
              },
            },
          ],
        },
      }}
    />
  );
};

export default Charts;
