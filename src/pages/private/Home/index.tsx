import React, { useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackPramsList from '@src/routes/Params/stacks';
import { Page } from '@src/constants/path';
import { useNavigation } from '@react-navigation/native';
import { AppColor } from '@src/constants/theme';
import AppTodos, { AppTodo } from '@src/components/organisms/AppTodos';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: AppColor.MAIN_DARK,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
});

const todos = [
  {
    id: '1',
    title: 'Todo',
    detail: 'to do',
    isDone: false,
  },
  {
    id: '2',
    title: 'Done',
    detail: 'done task',
    isDone: true,
  },
];

type HomeNavigationProps = StackNavigationProp<RootStackPramsList, 'HOME'>;
const Home = () => {
  const navigation = useNavigation<HomeNavigationProps>();

  useEffect(() => {
    console.log('@@@ mount page home @@@');

    return () => {
      console.log('@@@ dismount page home @@@');
    };
  });

  const onPress = useCallback(() => {
    navigation.navigate(Page.INPUT);
  }, [navigation]);

  const gotoDetail = useCallback(
    (state: AppTodo.State, isEditable: boolean) => {
      navigation.navigate(Page.DETAIL, { ...state, isEditable });
    },
    [navigation]
  );

  const actions = useMemo(
    () => ({
      removeTodo: () => {},
      toggleTodo: () => {},
      gotoDetail,
    }),
    [gotoDetail]
  );

  return (
    <View style={styles.container}>
      <AppTodos isEditable todos={todos} actions={{ ...actions, gotoDetail }} />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon color={AppColor.PRIMARY} name="plus" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
