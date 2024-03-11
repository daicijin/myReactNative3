import { createSlice } from '@reduxjs/toolkit';
import { Todos } from '@src/domain/models';

export const createInitialTodosState = (): Todos.TodosModel => {
  return Todos.factory([]);
};

const TodosSlice = createSlice({
  name: 'todos',
  initialState: createInitialTodosState(),
  reducers: {
    init: (state, action) => {
      console.log('@@@ Todos reducers init called @@@');
      state = action.payload;
      return state;
    },
    add: (state, action) => {
      console.log('@@@ Todos reducers add called @@@');
      state = Todos.add(state, action.payload);
      return state;
    },
    remove: (state, action) => {
      console.log('@@@ Todos reducers remove called @@@');
      state = Todos.remove(state, action.payload.id);
      return state;
    },
    update: (state, action) => {
      console.log('@@@ Todos reducers update called @@@');
      state = Todos.update(state, action.payload.id, action.payload);
      return state;
    },
    toggle: (state, action) => {
      console.log('@@@ Todos reducers toggle called @@@');
      state = Todos.toggle(state, action.payload.id);
      return state;
    },
  },
});

export const { init, add, remove, update, toggle } = TodosSlice.actions;
export default TodosSlice.reducer;
