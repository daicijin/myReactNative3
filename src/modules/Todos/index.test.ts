import { Todos } from '@src/domain/models';
import { init, add, remove, update, toggle } from './index';

describe('Todos', () => {
  describe('init', () => {
    it('returns an Action to tell the reducer "init" todos', () => {
      const action = init(Todos.factory([{ title: '1', detail: 'foo' }, { title: '2' }]));
      expect(action.type).toBe('todos/init');
      expect(Todos.getNumof(action.payload)).toBe(2);
    });
  });

  describe('add', () => {
    it('returns an Action to tell the reducer "add" a todo', () => {
      const action = add({ title: '3', detail: 'bar' });
      expect(action.type).toBe('todos/add');
      expect(action.payload.title).toBe('3');
      expect(action.payload.detail).toBe('bar');
    });
  });

  describe('remove', () => {
    it('returns an Action to tell the reducer "remove" a todo', () => {
      const action = remove({ id: '1' });
      expect(action.type).toBe('todos/remove');
      expect(action.payload.id).toBe('1');
    });
  });

  describe('update', () => {
    it('returns an Action to tell the reducer "update" a todo', () => {
      const action = update({ id: '1', todo: { title: 'updated', detail: 'baz' } });
      expect(action.type).toBe('todos/update');
      expect(action.payload.id).toBe('1');
      expect(action.payload.todo.title).toBe('updated');
      expect(action.payload.todo.detail).toBe('baz');
    });
  });

  describe('toggle', () => {
    it('returns an Action to tell the reducer "toggle" a todo', () => {
      const action = toggle({ id: '1' });
      expect(action.type).toBe('todos/toggle');
      expect(action.payload.id).toBe('1');
    });
  });
});
