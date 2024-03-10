import { AppColor } from '@src/constants/theme';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
  button: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    borderRadius: 0,
    margin: 0,
  },
});

interface AppIconButtonProps {
  icon: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  iconColor?: string;
  size?: number;
}

const AppIconButton = (props: AppIconButtonProps) => {
  const { icon, onPress, style, iconColor = AppColor.WHITE, size = 18 } = props;

  return <IconButton onPress={onPress} iconColor={iconColor} size={size} style={[styles.button, style]} icon={icon} />;
};

export default AppIconButton;
