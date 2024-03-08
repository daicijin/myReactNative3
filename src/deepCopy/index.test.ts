import deepCopy from '.';

const deepObject = {
  foo: 1,
  bar: {
    foo: [0, 1, 2],
    bar: {
      foo: true,
      bar: ['foo', 'bar'],
    },
  },
};

describe('deepCopy', () => {
  test('should Return an object with the same argument and value', () => {
    expect(deepCopy(deepObject)).toEqual(deepObject);
  });

  test('shold return an object with the differnt argument and value', () => {
    expect(deepCopy(deepObject)).not.toBe(deepObject);
  });
});
