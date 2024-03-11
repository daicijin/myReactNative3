import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@src/lib/hooks/use-app-dispatch';
import * as Todos from '@src/modules/Todos';
import Home from '@src/pages/private/Home';
import { getTodos } from '@src/selectors/Todos';

const ConnectedHome = () => {
  const todos = useSelector(getTodos);
  const dispatch = useAppDispatch();

  const actions = useMemo(
    () => ({
      removeTodo: (id: string) => {
        dispatch(Todos.remove(id));
      },
      toggleTodo: (id: string) => {
        dispatch(Todos.toggle(id));
      },
    }),
    [dispatch]
  );

  return <Home todos={todos} actions={actions} />;
};
export default ConnectedHome;
