import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AppButton, AppInputField } from '@src/components/atoms';
import { useControlledComponent } from '@src/lib/hooks';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textField: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});

interface TodoEditActions {
  changeTodo: (
    id: string,
    newValue: {
      title: string;
      detail: string;
    }
  ) => void;
}

interface TodoEditProps {
  actions: TodoEditActions;
}

interface TodoEditParams {
  id: string;
  isEditable: boolean;
  title: string;
  detail: string;
}

const Detail = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<Record<string, TodoEditParams>, string>>();
  const { isEditable, title: titileInitialValue, detail: detailInitialValue } = params;

  const title = useControlledComponent(titileInitialValue);
  const detail = useControlledComponent(detailInitialValue);

  const onSumbit = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    console.log('@@@ mount page detail @@@');

    return () => {
      console.log('@@@ dismount page detail @@@');
    };
  });

  return (
    <View style={styles.container}>
      <AppInputField
        disabled={!isEditable}
        label="Title"
        value={title.value}
        onChangeText={title.onChangeText}
        style={styles.textField}
      />
      <AppInputField
        disabled={!isEditable}
        label="Detail"
        value={detail.value}
        onChangeText={detail.onChangeText}
        style={styles.textField}
      />
      {isEditable && <AppButton label="Submit" onPress={onSumbit} style={styles.button} />}
    </View>
  );
};

export default Detail;
