import React, { useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackPramsList from '@src/routes/Params/stacks';
import { Page } from '@src/constants/path';
import { useNavigation } from '@react-navigation/native';
import { AppColor } from '@src/constants/theme';
import AppTodos, { AppTodo, State as AppTodosState } from '@src/components/organisms/AppTodos';
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

interface HomeProps {
  todos: AppTodosState;
  actions: {
    toggleTodo: AppTodo.DoneButton.ToggleTodo;
    removeTodo: AppTodo.DeleteButton.RemoveTodo;
  };
}

type HomeNavigationProps = StackNavigationProp<RootStackPramsList, 'HOME'>;
const Home = (props: HomeProps) => {
  const navigation = useNavigation<HomeNavigationProps>();

  useEffect(() => {
    console.log('@@@ mount page home @@@');
    console.log(props);

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
      ...props.actions,
      gotoDetail,
    }),
    [gotoDetail, props.actions]
  );

  return (
    <View style={styles.container} testID="HOME">
      <AppTodos isEditable todos={props.todos} actions={actions} />
      <TouchableOpacity onPress={onPress} style={styles.button} testID="TODO_OPEN_INPUT_BUTTON">
        <Icon color={AppColor.PRIMARY} size={24} name="plus" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
