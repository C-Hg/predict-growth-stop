export interface Period {
  from: string;
  isPeriodValid: boolean;
  to: string;
}

export enum PeriodStatus {
  Default,
  Valid,
  Wrong,
}
