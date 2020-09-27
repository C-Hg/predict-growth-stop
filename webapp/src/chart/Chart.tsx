/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as chartjs from "chart.js";
import React from "react";
import { ChartData, Line } from "react-chartjs-2";

import filterColumns from "./filterColumns";

import { Column } from "../form/Data.interface";
import theme from "../styles/theme";

interface Props {
  columns: Column[];
}

const { chartBlue, chartPurple, chartYellow } = theme.colors;

const Chart: React.FC<Props> = (props: Props) => {
  const { columns } = props;

  // only keep the valid and completed columns
  const { ages, expectedWeights, measuredWeights } = filterColumns(columns);

  const formattedData: ChartData<chartjs.ChartData> = {
    labels: ages,
    datasets: [
      {
        // y coordinates
        data: expectedWeights,
        label: "Poids attendu",

        backgroundColor: chartBlue,
        // fill zIndex
        fill: +1,

        borderWidth: 3,
        // @ts-ignore
        fillColor: chartYellow,
        strokeColor: chartYellow,

        pointBackgroundColor: chartYellow,
        pointBorderColor: chartYellow,
        pointBorderWidth: 5,
        pointColor: chartYellow,
        pointStrokeColor: chartYellow,

        pointHitRadius: 10,

        // straight line
        lineTension: 0,
      },
      {
        // y coordinates
        data: measuredWeights,
        label: "Poids mesuré",

        // @ts-ignore
        fillColor: "white",
        fill: +2,

        backgroundColor: chartPurple,
        strokeColor: chartPurple,
        borderWidth: 3,

        pointBackgroundColor: chartPurple,
        pointBorderColor: chartPurple,
        pointColor: chartPurple,
        pointStrokeColor: chartPurple,
        pointBorderWidth: 5,

        pointHitRadius: 10,

        lineTension: 0,
      },
    ],
  };

  return <Line data={formattedData} />;
};

export default Chart;
