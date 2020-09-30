const customMediaQuery = (width: number): string =>
  `@media (min-width: ${width}px)`;

const size = {
  mobile: 300,
  mobileL: 425,
  tablet: 768,
  desktop: 922,
};

export const device = {
  mobile: customMediaQuery(size.mobile),
  mobileL: customMediaQuery(size.mobileL),
  tablet: customMediaQuery(size.tablet),
  desktop: customMediaQuery(size.desktop),
};

export default device;
