import { useState } from "react";

import { Interval, Period, StudiedIntervals } from "./Area.interface";
import integrate from "./integrate";

import { Column } from "../form/Data.interface";

interface BothIntervals {
  expectedWeightInterval: Interval;
  measuredWeightInterval: Interval;
}

interface Area {
  area: string;
  studiedIntervals: StudiedIntervals;
}

const useAreaBetweenCurves = (columns: Column[], period: Period): Area => {
  // prendre en compte l'intervalle étudié +++
  const intervals: BothIntervals[] = [];
  const [area, setArea] = useState("");
  const [intervalYStartExpected, setIntervalYStartExpected] = useState(0);
  const [intervalYEndExpected, setIntervalYEndExpected] = useState(0);
  const [intervalYStartMeasured, setIntervalYStartMeasured] = useState(0);
  const [intervalYEndMeasured, setIntervalYEndMeasured] = useState(0);

  if (period.isPeriodValid) {
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
      if (Number(period.from) < xStartFromColumn) {
        xStart = xStartFromColumn;
      } else {
        xStart = Number(period.from);
        const newIntervalYStartExpected =
          expectedWeightSlope * Number(period.from) + expectedWeightIntercept;
        const newIntervalYStartMeasured =
          measuredWeightSlope * Number(period.from) + measuredWeightIntercept;
        if (newIntervalYStartExpected !== intervalYStartExpected) {
          setIntervalYStartExpected(newIntervalYStartExpected);
        }
        if (newIntervalYStartMeasured !== intervalYStartMeasured) {
          setIntervalYStartMeasured(newIntervalYStartMeasured);
        }
      }

      let xEnd;
      if (Number(period.to) > xEndFromColumn) {
        xEnd = xEndFromColumn;
      } else {
        xEnd = Number(period.to);
        const newIntervalYEndExpected =
          expectedWeightSlope * Number(period.to) + expectedWeightIntercept;
        const newIntervalYEndMeasured =
          measuredWeightSlope * Number(period.to) + measuredWeightIntercept;
        if (newIntervalYEndExpected !== intervalYEndExpected) {
          setIntervalYEndExpected(newIntervalYEndExpected);
        }
        if (newIntervalYEndMeasured !== intervalYEndMeasured) {
          setIntervalYEndMeasured(newIntervalYEndMeasured);
        }
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
    const formattedResult = result.toFixed(3);

    if (formattedResult !== area) {
      setArea(formattedResult);
    }
  }

  return {
    area,
    studiedIntervals: {
      intervalYStartExpected,
      intervalYEndExpected,
      intervalYStartMeasured,
      intervalYEndMeasured,
    },
  };
};

export default useAreaBetweenCurves;
