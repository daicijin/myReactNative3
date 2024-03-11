import { createSelector } from 'reselect';
import * as Domin from '@src/domain/models/';
import AppState from '@src/store';
import round from '@src/lib/round';

const selectTodos = (state: typeof AppState) => {
  return state.getState().todos;
};

export const getTodosArray = createSelector([selectTodos], (todos) => {
  console.log('@@@ getTodosArray called @@@');
  return Object.values(todos).map((todo) => ({
    id: todo.id,
    title: todo.title,
    detail: todo.detail,
    isDone: Domin.Todo.isDone(todo),
    createdAt: new Date(todo.createdAt).getTime(),
    updatedAt: new Date(todo.updatedAt).getTime(),
  }));
});

export const getTodos = createSelector([getTodosArray], (todos) => {
  console.log('@@@ getTodos called @@@');
  return todos.sort((a, b) => b.createdAt - a.createdAt);
});

export const getCompletedAll = createSelector([getTodosArray], (todos) => todos.filter((todo) => todo.isDone));

export const getNumofCompleted = createSelector([getCompletedAll], (todos) => todos.length);

export const getStatistics = createSelector([getTodosArray, getNumofCompleted], (todos, numofCompleted) => {
  const numofAll = todos.length;
  const numofUncompleted = numofAll - numofCompleted;
  const completedRatio = round(numofCompleted / numofAll, 3);
  const uncompletedRatio = round(1 - completedRatio, 3);

  return {
    numofAll,
    numofCompleted,
    numofUncompleted,
    completedRatio,
    uncompletedRatio,
  };
});

export const getHistories = createSelector([getCompletedAll], (todos) =>
  todos.sort((a, b) => b.updatedAt - a.updatedAt)
);
