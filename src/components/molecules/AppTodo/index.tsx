import { AppColor } from '@src/constants/theme';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: AppColor.MAIN,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: AppColor.WHITE,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  detail: {
    fontSize: 16,
    color: AppColor.WHITE,
  },
});

interface AppTodoProps {
  onPress: () => void;
  title: string;
  detail: string | undefined;
  isDone: boolean | undefined;
}

const AppTodo = (props: AppTodoProps) => {
  const { onPress, title, detail, isDone } = props;
  const labelStyle = useMemo(() => (isDone ? [styles.title, styles.doneText] : styles.title), [isDone]);

  return (
    <TouchableHighlight style={styles.contentContainer} onPress={onPress}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={labelStyle}>{title}</Text>
          {!!detail && <Text style={styles.detail}>{detail}</Text>}
        </View>
        <Icon name="angle-right" size={32} color={AppColor.WHITE} />
      </View>
    </TouchableHighlight>
  );
};

export default AppTodo;
