import { Column } from "./Data.interface";

const validateColumn = (column: Column): boolean => {
  const { age, expectedWeight, measuredWeight } = column;
  if (!age || !expectedWeight || !measuredWeight) {
    return false;
  }

  // expected weight must be greater than measuredWeight
  if (Number(expectedWeight) < Number(measuredWeight)) {
    return false;
  }

  // age must be in month
  if (Number(age) > 50) {
    return false;
  }

  return true;
};

export default validateColumn;
