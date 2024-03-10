import { createContext } from 'react';

export enum Status {
  LOADING = 'loading',
  FIRST_OPEN = 'firstOpen',
  UN_AUTHORIZED = 'unAuthorized',
  AUTHORIZED = 'authorized',
}

export const createApplicationInitiramState = (): Status => {
  return Status.LOADING;
};

export const Context = createContext({
  applicationState: createApplicationInitiramState(),
  setApplicationState: (_: Status) => {},
});
