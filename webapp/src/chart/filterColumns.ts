import { Column } from "../form/Data.interface";

interface DisplayableData {
  ages: number[];
  expectedWeights: number[];
  measuredWeights: number[];
}

/**
 * Prepares the arrays for the charts
 * Only keeps valid columns
 * Columns are validated independently in DataColumn
 */
const filterColumns = (columns: Column[]): DisplayableData => {
  const filteredData = columns.filter((dataPoint) => {
    return dataPoint.isValidated;
  });

  const ages = filteredData.map((dataPoint) => Number(dataPoint.age));
  const expectedWeights = filteredData.map((dataPoint) =>
    Number(dataPoint.expectedWeight)
  );
  const measuredWeights = filteredData.map((dataPoint) =>
    Number(dataPoint.measuredWeight)
  );

  return { ages, expectedWeights, measuredWeights };
};

export default filterColumns;
