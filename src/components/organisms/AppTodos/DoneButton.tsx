import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { AppColor } from '@src/constants/theme';
import { AppIconButton } from '@src/components/atoms';

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColor.PRIMARY,
  },
  done: {
    backgroundColor: AppColor.MAIN_DARK,
  },
});

export interface ToggleTodo {
  (id: string): void;
}

interface DoneButtonProps {
  state: {
    id: string;
    isDone?: boolean;
  };
  actions: {
    toggleTodo: ToggleTodo;
    closerow: () => void;
  };
}

export const Component = ({ state, actions }: DoneButtonProps) => {
  const { id, isDone } = state;
  const { toggleTodo, closerow } = actions;

  const onPress = useCallback(async () => {
    toggleTodo(id);
    closerow();
  }, [id, toggleTodo, closerow]);

  return (
    <AppIconButton onPress={onPress} icon={isDone ? 'restore' : 'check'} style={isDone ? styles.done : styles.button} />
  );
};
