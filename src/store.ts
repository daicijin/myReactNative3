import { Middleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import TodosReducer from './modules/Todos';

const loggerStateWithAction: Middleware = (store) => (next) => (action) => {
  console.log('loggerStateWithAction middleware is called.');
  console.log('dispatching', action);
  console.log('prev state', store.getState());
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export const AppStore = configureStore({
  reducer: {
    todos: TodosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerStateWithAction).concat(loggerStateWithAction),
});

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
export default AppStore;
