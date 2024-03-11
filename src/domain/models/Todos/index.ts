import * as Todo from '@src/domain/models/Todo';
import { assert } from '@src/lib/assert';
import { filter } from '@januswel/object-utilities';

export interface TodosModel {
  [id: string]: Todo.TodoModel;
}

export const factory = (newValues: Todo.TodoValues[]): TodosModel => {
  console.log('@@@ Todos factory called @@@');
  if (!newValues) {
    return {};
  }

  return newValues.reduce<TodosModel>((result, newValue) => {
    console.log('newValue', newValue);
    const newTodo = Todo.factory(newValue);
    result[newTodo.id] = newTodo;
    return result;
  }, {});
};

export const add = (todos: TodosModel, newTodo: Todo.TodoModel): TodosModel => {
  console.log('@@@ Todos add called @@@');
  return {
    ...todos,
    [newTodo.id]: newTodo,
  };
};

export const remove = (todos: TodosModel, targetId: string): TodosModel => {
  console.log('@@@ Todos remove called @@@');
  return filter(todos, (id) => id !== targetId);
};

export const update = (todos: TodosModel, targetId: string, newValues: Todo.TodoValues): TodosModel => {
  console.log('@@@ Todos update called @@@');
  assert(targetId in todos);

  return {
    ...todos,
    [targetId]: Todo.change(todos[targetId], newValues),
  };
};

export const toggle = (todos: TodosModel, targetId: string): TodosModel => {
  console.log('@@@ Todos toggle called @@@');
  assert(targetId in todos);

  return {
    ...todos,
    [targetId]: Todo.toggle(todos[targetId]),
  };
};

export const getNumof = (todos: TodosModel): number => {
  console.log('@@@ Todos getNumof called @@@');
  return Object.keys(todos).length;
};

export const findByTitle = (todos: TodosModel, title: string): Todo.TodoModel[] => {
  console.log('@@@ Todos findByTitle called @@@');
  return Object.values(todos).filter((todo) => todo.title === title);
};

export const getCompletedTodos = (todos: TodosModel) => {
  return Object.values(todos).filter((todo) => todo.completedAt !== null);
};
