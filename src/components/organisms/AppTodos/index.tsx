import React, { ReactElement } from 'react';
import * as AppTodo from './Todo';
import { AppColor } from '@src/constants/theme';
import { FlatList, StyleSheet, View } from 'react-native';

export { AppTodo };

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  separator: {
    height: 1,
    backgroundColor: AppColor.SECONDARY,
  },
});

export type State = Array<AppTodo.State>;

interface EditableProps {
  isEditable: true;
  todos: State;
  actions: AppTodo.EditableActions;
}

interface ReadonlyProps {
  isEditable: false;
  todos: State;
  header: ReactElement;
  actions: AppTodo.ReadonlyActions;
}

type TodosProps = EditableProps | ReadonlyProps;

const AppTodos = (props: TodosProps) => {
  if (props.isEditable) {
    return (
      <FlatList
        style={styles.container}
        data={props.todos}
        renderItem={({ item }) => (
          <AppTodo.Component isEditable={props.isEditable} state={item} actions={props.actions} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.id}
      />
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={props.todos}
      renderItem={({ item }) => (
        <AppTodo.Component isEditable={props.isEditable} state={item} actions={props.actions} />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={props.header}
    />
  );
};

export default AppTodos;
