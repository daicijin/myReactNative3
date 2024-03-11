import { combineReducers } from 'redux';
import * as Todos from '@src/modules/Todos';

export const createInitialTodosState = () => {
  return Todos.createInitialTodosState();
};

export type AppState = ReturnType<typeof createInitialTodosState>;

export default combineReducers({
  todos: Todos.default,
});
