import React from 'react';
import { ImageSourcePropType, ViewStyle } from 'react-native';
import { Avatar } from 'react-native-paper';

interface AppAvatarProps {
  size?: number;
  source: ImageSourcePropType;
  style?: ViewStyle | ViewStyle[];
}
const AppAvatar = ({ size = 220, source, style }: AppAvatarProps) => {
  return <Avatar.Image size={size} source={source} style={style} />;
};
export default AppAvatar;
