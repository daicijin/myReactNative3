export const assert = (condition: boolean, message?: string): asserts condition => {
  if (!condition) {
    throw new Error(message);
  }
};

export const assertIsDefined = <T>(value: T): asserts value is NonNullable<T> => {
  if (value === undefined || value === null) {
    throw new Error(`Expected 'value' to be defined, but received ${value}`);
  }
};
