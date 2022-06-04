import facepaint from "facepaint";

const breakpoints = {
  mobile: 576,
  tab: 768,
  laptop: 992,
  desktop: 1200,
  extraLargeDesktop: 1600,
};

const mq = facepaint(
  Object.values(breakpoints).map((bp) => `@media (min-width: ${bp}px)`)
);

export default mq;
