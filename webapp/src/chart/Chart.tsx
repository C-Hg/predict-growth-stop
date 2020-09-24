import React from "react";
import { Line } from "react-chartjs-2";

import { Data } from "../form/Data.interface";
import theme from "../styles/theme";

interface Props {
  data: Data[];
}

const { chartBlue, chartPurple, chartYellow } = theme.colors;

const Chart: React.FC<Props> = (props: Props) => {
  const { data } = props;

  const ages = data
    .map((dataPoint) => Number(dataPoint.age))
    .filter((age) => age !== 0);
  const expectedWeight = data.map((dataPoint) => dataPoint.expectedWeight);
  const measuredWeight = data.map((dataPoint) => dataPoint.measuredWeight);

  const formattedData: any = {
    labels: ages,
    datasets: [
      {
        // y coordinates
        data: expectedWeight,
        label: "Poids attendu",

        backgroundColor: chartBlue,
        // fill zIndex
        fill: +1,

        borderWidth: 3,
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
        data: measuredWeight,
        label: "Poids mesuré",

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
