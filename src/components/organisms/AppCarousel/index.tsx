import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { width } from '@src/lib/window';
import { AppCarouselItem } from '@src/components/molecules';

interface AppCarouselProps {
  onEnd: () => void;
  onNext: () => void;
  carouselRef: any;
  onSnapToItem: (slide: number) => void;
  data: { text: string }[];
}

const AppCarousel = (props: AppCarouselProps) => {
  const { onEnd, onNext, carouselRef, onSnapToItem, data } = props;

  return (
    <Carousel
      data={data}
      ref={carouselRef}
      renderItem={({ item, index }) => (
        <AppCarouselItem item={item} onPress={index === data.length - 1 ? onEnd : onNext} />
      )}
      width={width}
      onSnapToItem={onSnapToItem}
    />
  );
};

export default AppCarousel;
