import { Period } from "./Area.interface";

import { Column } from "../form/Data.interface";

export interface Interval {
  coefficient: number;
  xEnd: number;
  xStart: number;
  yStart: number;
}

const getAreaBetweenCurves = (columns: Column[], period: Period): string => {
  const yValues = columns.map(
    (column) => Number(column.expectedWeight) - Number(column.measuredWeight)
  );
  // prendre en compte l'intervalle étudié +++
  const intervals: Interval[] = [];

  // select the intervals on which to run the integration
  for (let i = 0; i < columns.length - 1; i += 1) {
    const xStartFromColumn = Number(columns[i].age);
    const xEndFromColumn = Number(columns[i + 1].age);

    // skip this interval if we do not want to integrate it
    if (
      xEndFromColumn < Number(period.from) ||
      xStartFromColumn > Number(period.to)
    ) {
      continue;
    }

    // otherwise select xStart and xEnd
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

    // then compute the coefficient
    const coefficient = (yValues[i + 1] - yValues[i]) / (xEnd - xStart);

    intervals.push({
      coefficient,
      xEnd,
      xStart,
      yStart: yValues[i],
    });
  }

  // TODO: move me in my own file ++++

  const integrate = (interval: Interval) => {
    const { coefficient, xStart, xEnd, yStart } = interval;
    // we integrate basic y = ax+b for each interval
    const f = (x: number) => {
      return coefficient * x + yStart;
    };

    let total = 0;
    const step = 0.01;
    for (let x = xStart; x < xEnd; x += step) {
      total += f(x + step / 2) * step;
    }
    return total;
  };

  console.info(JSON.stringify(intervals));
  // TODO: soustraire intégrale de poids mesuré à l'intégrale de poids attendu
  // perform integration on all intervals successively
  const result = intervals.reduce((area, interval) => {
    return area + integrate(interval);
  }, 0);

  return result.toFixed(3);
};

export default getAreaBetweenCurves;
