import React, { useCallback, useMemo, useRef } from 'react';
import * as DoneButton from './DoneButton';
import * as DeleteButton from './DeleteButton';
import { StyleSheet, View } from 'react-native';
import { AppColor } from '@src/constants/theme';
import { SwipeRow } from 'react-native-swipe-list-view';
import AppTodo from '@src/components/molecules/AppTodo';

export { DoneButton, DeleteButton };

export interface State {
  id: string;
  title: string;
  detail?: string;
  isDone?: boolean;
}

export interface GotoDetail {
  (state: State, isEditable: boolean): void;
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: AppColor.MAIN,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export interface EditableActions {
  toggleTodo: DoneButton.ToggleTodo;
  removeTodo: DeleteButton.RemoveTodo;
  gotoDetail: GotoDetail;
}

interface EditableProps {
  isEditable: true;
  state: State;
  actions: EditableActions;
}

const EditableRow = ({ state, isEditable, actions: { gotoDetail, toggleTodo, removeTodo } }: EditableProps) => {
  const rowRef = useRef<SwipeRow<View>>(null);

  const closerow = useCallback(() => {
    rowRef?.current?.closeRow();
  }, [rowRef]);

  const toggleActions = useMemo(() => {
    return { toggleTodo, closerow };
  }, [toggleTodo, closerow]);

  const removeActions = useMemo(() => {
    return { removeTodo, closerow };
  }, [removeTodo, closerow]);

  const onPress = useCallback(() => {
    gotoDetail(state, isEditable);
  }, [gotoDetail, isEditable, state]);

  return (
    <SwipeRow
      ref={rowRef}
      disableLeftSwipe={isEditable}
      disableRightSwipe={isEditable}
      rightOpenValue={-80}
      leftOpenValue={80}
    >
      <View style={styles.contentContainer}>
        <DoneButton.Component state={state} actions={toggleActions} />
        <DeleteButton.Component state={state} actions={removeActions} />
      </View>
      <AppTodo onPress={onPress} title={state.title} detail={state.detail} isDone={state.isDone} />
    </SwipeRow>
  );
};

export interface ReadonlyActions {
  gotoDetail: GotoDetail;
}

interface ReadOnlyProps {
  isEditable: false;
  state: State;
  actions: ReadonlyActions;
}

const ReadonlyRow = ({ state, isEditable, actions: { gotoDetail } }: ReadOnlyProps) => {
  const onPress = useCallback(() => {
    gotoDetail(state, isEditable);
  }, [gotoDetail, isEditable, state]);

  return <AppTodo onPress={onPress} title={state.title} detail={state.detail} isDone={state.isDone} />;
};

type Props = EditableProps | ReadOnlyProps;

export const Component = (props: Props) => {
  if (props.isEditable) {
    return <EditableRow {...props} />;
  }
  return <ReadonlyRow {...props} />;
};
