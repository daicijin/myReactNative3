import { useContext } from 'react';
import { UiContext, NetworkContext } from '@src/contexts';

type Task = () => Promise<void>;
const useNetworker = () => {
  const { dispatchNetworkActions } = useContext(NetworkContext);
  const { setError } = useContext(UiContext);

  return async (task: Task) => {
    try {
      dispatchNetworkActions({ type: 'begin' });
      await task();
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      dispatchNetworkActions({ type: 'end' });
    }
  };
};
export default useNetworker;
