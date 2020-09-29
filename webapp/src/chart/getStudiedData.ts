import cloneDeep from "lodash.clonedeep";

import { Period, StudiedIntervals } from "../area/Area.interface";

export interface PlotData {
  x: number;
  y: number;
}

interface StudiedData {
  studiedDataExpected: PlotData[];
  studiedDataMeasured: PlotData[];
  updatedExpectedWeights: number[];
  updatedMeasuredWeights: number[];
}

const getStudiedData = (
  ages: number[],
  expectedWeights: number[],
  measuredWeights: number[],
  period: Period,
  studiedIntervals: StudiedIntervals
): StudiedData => {
  const {
    intervalYEndExpected,
    intervalYStartExpected,
    intervalYEndMeasured,
    intervalYStartMeasured,
  } = studiedIntervals;

  const updatedExpectedWeights = cloneDeep(expectedWeights);
  const updatedMeasuredWeights = cloneDeep(measuredWeights);

  let startIndex = ages.findIndex((age) => age === Number(period.from));
  let endIndex = ages.findIndex((age) => age === Number(period.to));
  if (!ages.includes(Number(period.from))) {
    ages.push(Number(period.from));
    ages.sort((a, b) => a - b);
    startIndex = ages.findIndex((age) => age === Number(period.from));
    // pushes the y coordinates at the right place
    updatedExpectedWeights.splice(startIndex, 0, intervalYStartExpected);
    updatedMeasuredWeights.splice(startIndex, 0, intervalYStartMeasured);
  }
  if (!ages.includes(Number(period.to))) {
    ages.push(Number(period.to));
    ages.sort((a, b) => a - b);
    endIndex = ages.findIndex((age) => age === Number(period.to));
    // pushes the y coordinates at the right place
    updatedExpectedWeights.splice(endIndex, 0, intervalYEndExpected);
    updatedMeasuredWeights.splice(endIndex, 0, intervalYEndMeasured);
  }

  // compute studiedDataset coordinates, excluding points
  const studiedAges = cloneDeep(ages);
  const studiedWeightsExpected = cloneDeep(updatedExpectedWeights);
  const studiedWeightsMeasured = cloneDeep(updatedMeasuredWeights);

  if (startIndex !== 0) {
    studiedAges.splice(0, startIndex);
    studiedWeightsExpected.splice(0, startIndex);
    studiedWeightsMeasured.splice(0, startIndex);
  }

  // update endIndex
  endIndex = studiedAges.findIndex((age) => age === Number(period.to));
  studiedAges.splice(endIndex + 1, studiedAges.length - endIndex);
  studiedWeightsExpected.splice(
    endIndex + 1,
    studiedWeightsExpected.length - endIndex
  );
  studiedWeightsMeasured.splice(
    endIndex + 1,
    studiedWeightsMeasured.length - endIndex
  );

  const studiedDataExpected = studiedWeightsExpected.map((weight, index) => {
    return { x: studiedAges[index], y: weight };
  });
  const studiedDataMeasured = studiedWeightsMeasured.map((weight, index) => {
    return { x: studiedAges[index], y: weight };
  });

  return {
    studiedDataExpected,
    studiedDataMeasured,
    updatedExpectedWeights,
    updatedMeasuredWeights,
  };
};

export default getStudiedData;
