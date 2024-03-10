import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppColor } from '@src/constants/theme';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 50,
    flexDirection: 'row',
    marginBottom: 10,
  },
  labelContainer: {
    minWidth: 100,
  },
  labelText: {
    color: AppColor.WHITE,
    fontSize: 18,
  },
  valueContainer: {
    flexShrink: 1,
    paddingLeft: 10,
  },
  valueText: {
    color: AppColor.WHITE,
    fontSize: 18,
  },
});

interface AppLabelContainerProps {
  label: string;
  value: string | number | null;
}

const AppLabelContainer = ({ label, value }: AppLabelContainerProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
    </View>
  );
};
export default AppLabelContainer;
