import { Interval, Period } from "./Area.interface";
import integrate from "./integrate";

import { Column } from "../form/Data.interface";

interface BothIntervals {
  expectedWeightInterval: Interval;
  measuredWeightInterval: Interval;
}

const getAreaBetweenCurves = (columns: Column[], period: Period): string => {
  // prendre en compte l'intervalle étudié +++
  const intervals: BothIntervals[] = [];

  // select the intervals on which to run the integration
  for (let i = 0; i < columns.length - 1; i += 1) {
    const xStartFromColumn = Number(columns[i].age);
    const xEndFromColumn = Number(columns[i + 1].age);
    const yEndFromColumnExpected = Number(columns[i + 1].expectedWeight);
    const yEndFromColumnMeasured = Number(columns[i + 1].measuredWeight);
    const yStartFromColumnExpected = Number(columns[i].expectedWeight);
    const yStartFromColumnMeasured = Number(columns[i].measuredWeight);

    // skip this interval if we do not want to integrate it
    if (
      xEndFromColumn < Number(period.from) ||
      xStartFromColumn > Number(period.to)
    ) {
      continue;
    }

    // compute the slopes
    const expectedWeightSlope =
      (yEndFromColumnExpected - yStartFromColumnExpected) /
      (xEndFromColumn - xStartFromColumn);
    const measuredWeightSlope =
      (yEndFromColumnMeasured - yStartFromColumnMeasured) /
      (xEndFromColumn - xStartFromColumn);

    // then the intercepts with the starting points
    const expectedWeightIntercept =
      yStartFromColumnExpected - expectedWeightSlope * xStartFromColumn;
    const measuredWeightIntercept =
      yStartFromColumnMeasured - measuredWeightSlope * xStartFromColumn;

    // select xStart and xEnd
    let xStart;
    if (Number(period.from) <= xStartFromColumn) {
      xStart = xStartFromColumn;
    } else {
      xStart = Number(period.from);
    }

    let xEnd;
    if (Number(period.to) > xEndFromColumn) {
      xEnd = xEndFromColumn;
    } else {
      xEnd = Number(period.to);
    }

    intervals.push({
      expectedWeightInterval: {
        slope: expectedWeightSlope,
        xEnd,
        xStart,
        intercept: expectedWeightIntercept,
      },
      measuredWeightInterval: {
        slope: measuredWeightSlope,
        xEnd,
        xStart,
        intercept: measuredWeightIntercept,
      },
    });
  }

  // perform integration on all intervals successively
  const result = intervals.reduce((area, interval) => {
    const intervalArea =
      integrate(interval.expectedWeightInterval) -
      integrate(interval.measuredWeightInterval);
    return area + intervalArea;
  }, 0);

  return result.toFixed(3);
};

export default getAreaBetweenCurves;
