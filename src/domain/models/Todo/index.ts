import 'react-native-get-random-values';
import { v4 as generateUuid } from 'uuid';
import { assertIsDefined } from '@src/lib/assert';

export interface TodoModel {
  readonly id: string;
  readonly title: string;
  readonly detail?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly completedAt: string | null;
}

export interface TodoValues {
  readonly title: string;
  readonly detail?: string;
}

export const factory = ({ title, detail }: TodoValues): TodoModel => {
  assertIsDefined(title);
  const now = new Date().toISOString();

  return {
    id: generateUuid(),
    title,
    detail,
    createdAt: now,
    updatedAt: now,
    completedAt: null,
  };
};

export const toggle = (todo: TodoModel): TodoModel => {
  const now = new Date().toISOString();
  return {
    ...todo,
    updatedAt: now,
    completedAt: todo.completedAt === null ? now : null,
  };
};

export const isDone = (todo: TodoModel): boolean => todo.completedAt !== null;

export const change = (todo: TodoModel, newValues: TodoValues): TodoModel => {
  assertIsDefined(newValues.title);

  const now = new Date().toISOString();
  return {
    ...todo,
    ...newValues,
    updatedAt: now,
  };
};
