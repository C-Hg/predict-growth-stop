export interface Interval {
  slope: number;
  xEnd: number; // from the interval
  xStart: number; // from the interval
  intercept: number;
}

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

export interface StudiedIntervals {
  intervalYEndExpected: number;
  intervalYStartExpected: number;
  intervalYEndMeasured: number;
  intervalYStartMeasured: number;
}
