import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { width } from '@src/lib/window';
import { AppLogo, AppButton } from '@src/components/atoms';
import { AppColor } from '@src/constants/theme';

const padding = 20;
const edgeNumber = 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding,
    backgroundColor: AppColor.MAIN,
  },
  text: {
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 40,
    color: AppColor.WHITE,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width - padding * edgeNumber,
    paddingVertical: 10,
  },
  imageContainer: {
    flex: 2,
  },
  contentContainer: {
    flex: 3,
    paddingTop: 30,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});

interface AppCarouselItemProps {
  item: {
    text: string;
  };
  onPress: () => void;
}

const AppCarouselItem = (props: AppCarouselItemProps) => {
  const { item, onPress } = props;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.imageContainer}>
          <AppLogo />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <AppButton onPress={onPress} label="Next" />
        </View>
      </View>
    </View>
  );
};

export default AppCarouselItem;
