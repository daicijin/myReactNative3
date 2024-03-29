import * as Todo from './index';
import sleep from '@src/lib/sleep';

const ISO8601_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

describe('Todo', () => {
  describe('factory', () => {
    it('returns an instance of Todo model', () => {
      const todo = Todo.factory({ title: 'Try building apps with React Native', detail: 'Build Hello World app' });

      expect(todo.id.length).toBe(36);
      expect(todo.title).toBe('Try building apps with React Native');
      expect(todo.detail).toBe('Build Hello World app');
      expect(todo.completedAt).toBeNull();
      expect(todo.createdAt).toEqual(expect.stringMatching(ISO8601_PATTERN));
      expect(() => new Date(todo.createdAt)).not.toThrow();
      expect(todo.updatedAt).toEqual(expect.stringMatching(ISO8601_PATTERN));
      expect(() => new Date(todo.updatedAt)).not.toThrow();
      expect(todo.createdAt).toEqual(todo.updatedAt);
    });
  });

  describe('toggle', () => {
    it('returns an instance of Todo that has inversec value of isDone', async () => {
      const todo = Todo.factory({ title: 'foo' });
      expect(todo.completedAt).toBeNull();

      await sleep(10);
      const toggled = Todo.toggle(todo);
      expect(toggled.completedAt).not.toBeNull();
      expect(toggled.createdAt).toBe(todo.createdAt);
      expect(new Date(toggled.updatedAt).getTime()).toBeGreaterThan(new Date(todo.updatedAt).getTime());

      await sleep(10);
      const undoed = Todo.toggle(toggled);
      expect(undoed.completedAt).toBeNull();
      expect(undoed.createdAt).toBe(todo.createdAt);
      expect(new Date(undoed.updatedAt).getTime()).toBeGreaterThan(new Date(toggled.updatedAt).getTime());
    });
  });

  describe('isDone', () => {
    it('returns true when todo is completed', () => {
      const uncompleted = Todo.factory({ title: 'sample todo' });
      expect(Todo.isDone(uncompleted)).toBe(false);

      const completed = Todo.toggle(uncompleted);
      expect(Todo.isDone(completed)).toBe(true);
    });
  });

  describe('change', () => {
    it('returns an instance of Todo that has changed Todo model with specifed values', async () => {
      const todo = Todo.factory({ title: 'foo' });

      await sleep(10);
      const changed = Todo.change(todo, { title: 'bar', detail: 'sample' });
      expect(changed.title).toBe('bar');
      expect(changed.detail).toBe('sample');
      expect(new Date(changed.updatedAt).getTime()).toBeGreaterThan(new Date(todo.updatedAt).getTime());
    });
  });
});
