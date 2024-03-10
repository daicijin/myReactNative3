import { AppColor } from '@src/constants/theme';
import React from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import { Button as PagerButton } from 'react-native-paper';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '900',
    color: AppColor.WHITE,
  },
});

interface ButtonProps {
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyles?: ViewStyle | ViewStyle[];
  label?: string;
  color?: string;
  disabled?: boolean;
  disabledColor?: string;
  icon?: string;
}

const AppButton = (props: ButtonProps) => {
  const {
    onPress,
    style,
    textStyles,
    label,
    color = AppColor.SECONDARY,
    disabled,
    disabledColor = AppColor.MAIN_LIGHT,
    icon,
  } = props;

  return (
    <PagerButton
      mode="contained"
      onPress={onPress}
      style={style}
      disabled={disabled}
      contentStyle={{
        backgroundColor: disabled ? disabledColor : color,
      }}
      icon={icon}
    >
      {label && <Text style={[styles.text, textStyles]}>{label}</Text>}
    </PagerButton>
  );
};

export default AppButton;
