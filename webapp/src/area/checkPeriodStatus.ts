import { PeriodStatus } from "./Area.interface";

import { Column } from "../form/Data.interface";

/**
 * Checks the correctness of the period input, from must be greater than to
 */
const checkPeriodStatus = (
  columns: Column[],
  from: string,
  to: string
): PeriodStatus => {
  if (!from || !to) {
    return PeriodStatus.Default;
  }

  // TODO: validation définitive horizontale

  const ages = columns.map((column) => Number(column.age));
  // check that the lower boundary is greater than or equal to the earliest age provided
  if (Number(from) < Math.min(...ages)) {
    return PeriodStatus.Wrong;
  }

  // check that the lower boundary is greater than or equal to the earliest age provided
  if (Number(to) > Math.max(...ages)) {
    return PeriodStatus.Wrong;
  }

  if (Number(from) < Number(to)) {
    return PeriodStatus.Valid;
  }

  return PeriodStatus.Wrong;
};

export default checkPeriodStatus;
