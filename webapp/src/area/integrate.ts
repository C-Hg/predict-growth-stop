import { Interval } from "./Area.interface";

const integrate = (interval: Interval): number => {
  const { intercept, slope, xStart, xEnd } = interval;
  // we integrate basic affine functions for each interval
  function f(x: number) {
    return Number((slope * x + intercept).toFixed(4));
  }

  let total = 0;
  const step = 0.01;
  for (let x = xStart; x < xEnd; x += step) {
    total += f(x + step / 2) * step;
  }
  return total;
};

export default integrate;
