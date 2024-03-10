import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleSheet } from 'react-native';
import { width } from '@src/lib/window';
import rectImage from '@src/assets/reactIcon.jpg';

const edgeNumber = 2;
const ratio = 3;
const imageRatio = edgeNumber / ratio;

const styles = StyleSheet.create({
  image: {
    width: width * imageRatio,
    flex: 1,
    resizeMode: 'contain',
  },
});

interface AppLogoProps {
  image?: ImageSourcePropType;
  style?: ImageStyle | ImageStyle[];
}

const AppLogo = (props: AppLogoProps) => {
  const { image = rectImage, style } = props;

  return <Image source={image} resizeMode="contain" style={[styles.image, style]} />;
};

export default AppLogo;
