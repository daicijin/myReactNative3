import { AppColor } from '@src/constants/theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    color: AppColor.WHITE,
    fontSize: 24,
  },
});

interface HeaderTextProps {
  text: string;
}

const AppHeaderText = ({ text }: HeaderTextProps) => {
  return <Text style={styles.headerText}>{text}</Text>;
};

export default AppHeaderText;
