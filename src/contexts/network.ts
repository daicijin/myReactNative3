import { Dispatch, createContext } from 'react';

export const createInitialNetworkState = () => {
  return 0;
};

type State = ReturnType<typeof createInitialNetworkState>;

interface Action {
  type: 'begin' | 'end';
}

interface Context {
  networkState: number;
  dispatchNetworkActions: Dispatch<Action>;
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'begin':
      return state + 1;
    case 'end':
      return state - 1;
    default:
      return state;
  }
};

export const Context = createContext<Context>({
  networkState: createInitialNetworkState(),
  dispatchNetworkActions: () => {},
});
