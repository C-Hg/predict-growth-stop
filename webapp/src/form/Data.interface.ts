export interface Column {
  age: string;
  expectedWeight: string;
  measuredWeight: string;
  isValidated: boolean;
}

export enum DataNames {
  age = "age",
  expectedWeight = "expectedWeight",
  measuredWeight = "measuredWeight",
}
