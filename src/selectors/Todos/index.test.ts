import * as selectors from './index';
import * as Domain from '@src/domain/models';
import AppStore from '@src/store';
import { add } from '@src/modules/Todos';
import sleep from '@src/lib/sleep';

describe('todos selectors', () => {
  describe('getTodos', () => {
    it('returns an array of todos sorted by createdAt desc', async () => {
      AppStore.dispatch(add(Domain.Todo.factory({ title: 'foo' })));
      await sleep(10);
      AppStore.dispatch(add(Domain.Todo.factory({ title: 'bar' })));

      const actual = selectors.getTodos(AppStore);
      expect(actual.length).toBe(2);
      expect(actual[0].title).toBe('bar');
    });
  });
});
