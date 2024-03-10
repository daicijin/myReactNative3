import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as UiContext from '@src/contexts/ui';
import { AppColor } from '@src/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColor.MAIN,
  },
  text: {
    color: AppColor.WHITE,
  },
});

const ChangeStateButton = ({ state }: { state: UiContext.Status }) => {
  const { setApplicationState } = useContext(UiContext.Context);
  return (
    <TouchableOpacity onPress={() => setApplicationState(state)}>
      <Text>Change state to {state}</Text>
    </TouchableOpacity>
  );
};

const Loading = () => {
  useEffect(() => {
    console.log('@@@ mount page loading @@@');

    return () => {
      console.log('@@@ dismount page unloading @@@');
    };
  });

  return (
    <View style={styles.container}>
      <ChangeStateButton state={UiContext.Status.AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.UN_AUTHORIZED} />
      <ChangeStateButton state={UiContext.Status.FIRST_OPEN} />
    </View>
  );
};

export default Loading;
