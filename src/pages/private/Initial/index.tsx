import React, { useCallback, useContext, useRef } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { AppColor } from '@src/constants/theme';
import { Context, Status } from '@src/contexts/ui';
import AppCarousel from '@src/components/organisms/AppCarousel';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import { AppPageNation } from '@src/components/atoms';

const padding = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding,
    backgroundColor: AppColor.MAIN,
  },
});

interface Data {
  text: string;
}

const renderData: Data[] = [
  {
    text: 'Hello React Native World.\nWelcome to the JS world.\n\nThis application is made from React Native.',
  },
  {
    text: 'If you use this application, \nyou could manage your task.\n\nSo, please register and manage your task.',
  },
  {
    text: 'In the first, you have to register your account.\n\nPlease tell me your email.',
  },
];

const Initial = () => {
  const { setApplicationState } = useContext(Context);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const carouserlRef = useRef<ICarouselInstance>(null);
  const onEnd = useCallback(() => {
    setApplicationState(Status.UN_AUTHORIZED);
  }, [setApplicationState]);

  const onNext = useCallback(() => {
    setTimeout(() => {
      if (!carouserlRef || !carouserlRef.current) {
        return;
      }
      carouserlRef.current.next();
    }, 250);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppCarousel
        data={renderData}
        onEnd={onEnd}
        onNext={onNext}
        carouselRef={carouserlRef}
        onSnapToItem={(index) => setCurrentIndex(index)}
      />
      <AppPageNation length={renderData.length} index={currentIndex} />
    </SafeAreaView>
  );
};

export default Initial;
