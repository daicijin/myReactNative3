import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { AppColor } from '@src/constants/theme';
import { AppIconButton } from '@src/components/atoms';

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColor.CAUTION,
  },
});

export interface RemoveTodo {
  (id: string): void;
}

interface DeleteButtonProps {
  state: {
    id: string;
  };
  actions: {
    removeTodo: RemoveTodo;
  };
}

export const Component = ({ state, actions }: DeleteButtonProps) => {
  const { id } = state;
  const { removeTodo } = actions;

  const onPress = useCallback(async () => {
    removeTodo(id);
  }, [id, removeTodo]);

  return <AppIconButton onPress={onPress} icon="delete" style={styles.button} />;
};
