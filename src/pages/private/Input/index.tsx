import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppButton, AppIconButton, AppInputField, dissmissKeyboard } from '@src/components/atoms';
import { AppColor } from '@src/constants/theme';
import { useControlledComponent } from '@src/lib/hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: AppColor.MAIN,
  },
  text: {
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
  },
  iconButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

const Input = () => {
  const title = useControlledComponent('');
  const detail = useControlledComponent('');

  const { goBack } = useNavigation();
  const back = useCallback(() => {
    goBack();
  }, [goBack]);

  const addTodo = useCallback(() => {
    back();
    title.onChangeText('');
    detail.onChangeText('');
  }, [back, title, detail]);

  useEffect(() => {
    console.log('@@@ mount page input @@@');

    return () => {
      console.log('@@@ dismount page input @@@');
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={dissmissKeyboard}>
        <View style={styles.container}>
          <AppIconButton icon="close" size={30} iconColor={AppColor.WHITE} onPress={back} style={styles.iconButton} />
          <AppInputField label="Title" value={title.value} onChangeText={title.onChangeText} style={styles.text} />
          <AppInputField label="Detail" value={detail.value} onChangeText={detail.onChangeText} style={styles.text} />
          <AppButton label="Add" onPress={addTodo} style={styles.button} disabled={!title.value} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Input;
