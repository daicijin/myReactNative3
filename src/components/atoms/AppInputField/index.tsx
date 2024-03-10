import React from 'react';
import { ViewStyle, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppColor } from '@src/constants/theme';

interface AppInputFieldProps {
  label: string;
  value: string;
  onChangeText?: (str: string) => void;
  style?: ViewStyle;
  secureTextEntry?: boolean;
  disabled?: boolean;
}

const theme = {
  dark: true,
  colors: {
    primary: AppColor.PRIMARY,
    background: AppColor.MAIN,
    placeholder: AppColor.PRIMARY,
  },
};

const AppInputField = (props: AppInputFieldProps) => {
  const { label, value, onChangeText = () => {}, style, secureTextEntry, disabled } = props;
  return (
    <TextInput
      dense
      label={label}
      value={value}
      disabled={disabled}
      onChangeText={onChangeText}
      mode="outlined"
      theme={theme}
      style={style}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      placeholder="Type here"
      outlineColor={AppColor.PRIMARY}
      textColor={AppColor.WHITE}
    />
  );
};
export default AppInputField;

export const dissmissKeyboard = () => {
  Keyboard.dismiss();
};
