import React, { useContext, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { width, height } from '@src/lib/window';
import { AppColor } from '@src/constants/theme';
import { NetworkContext } from '@src/contexts';

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    width,
    height,
    backgroundColor: AppColor.WHITE,
    opacity: 0.5,
  },
  container: {
    position: 'absolute',
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AppNetworkPanel = () => {
  const { networkState } = useContext(NetworkContext);
  const isCommunicating = useMemo(() => networkState > 0, [networkState]);
  if (!isCommunicating) {
    return null;
  }

  return (
    <View style={styles.dropdown}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={AppColor.MAIN_LIGHT} />
      </View>
    </View>
  );
};
export default AppNetworkPanel;
