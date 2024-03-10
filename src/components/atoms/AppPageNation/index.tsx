import React from 'react';
import AnimatedDotsCarousel, { DotConfig } from 'react-native-animated-dots-carousel';

const ActiveDot: DotConfig = {
  color: 'white',
  margin: 3,
  opacity: 1,
  size: 8,
};

const InactiveDot: DotConfig = {
  color: 'gray',
  margin: 3,
  opacity: 0.5,
  size: 8,
};

interface AppPageNationProps {
  length: number;
  index: number;
}

const AppPageNation = (props: AppPageNationProps) => {
  const { length, index } = props;

  return (
    <AnimatedDotsCarousel
      length={length}
      currentIndex={index}
      maxIndicators={4}
      interpolateOpacityAndColor={true}
      activeIndicatorConfig={ActiveDot}
      inactiveIndicatorConfig={InactiveDot}
      decreasingDots={[
        {
          config: { color: 'white', margin: 3, opacity: 0.5, size: 6 },
          quantity: 1,
        },
        {
          config: { color: 'white', margin: 3, opacity: 0.5, size: 4 },
          quantity: 1,
        },
      ]}
    />
  );
};

export default AppPageNation;
