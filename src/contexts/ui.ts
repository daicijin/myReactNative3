import { createContext } from 'react';

export enum Status {
  LOADING = 'loading',
  FIRST_OPEN = 'firstOpen',
  UN_AUTHORIZED = 'unAuthorized',
  AUTHORIZED = 'authorized',
}

export const createApplicationInitialState = (): Status => {
  return Status.LOADING;
};

type ErrorState = Error | null;
export const createErrorInitialState = (): ErrorState => {
  return null;
};

export const createSnackbarInitialState = () => {
  return {
    visible: false,
    message: '',
    label: 'Done',
  };
};

type SnackbarState = ReturnType<typeof createSnackbarInitialState>;

export const Context = createContext({
  error: createErrorInitialState(),
  setError: (_: ErrorState) => {},
  snackbar: createSnackbarInitialState(),
  setSnackbar: (_: SnackbarState) => {},
  applicationState: createApplicationInitialState(),
  setApplicationState: (_: Status) => {},
});
