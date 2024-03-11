import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { UiContext } from '@src/contexts';
import { width } from '@src/lib/window';
import { AppColor } from '@src/constants/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
  },
  panel: {
    backgroundColor: AppColor.MAIN,
    padding: 8,
  },
  label: {
    color: AppColor.WHITE,
  },
});

const AppErrorPanel = () => {
  const { error } = useContext(UiContext);

  if (!error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.label}>{error.message}</Text>
      </View>
    </View>
  );
};

export default AppErrorPanel;
