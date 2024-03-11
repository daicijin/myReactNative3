import React, { useCallback, useReducer, useState } from 'react';
import { Provider } from 'react-redux';
import { PaperProvider, Snackbar } from 'react-native-paper';
import { StyleSheet, SafeAreaView } from 'react-native';

import AppStore from './store';
import * as UiContext from './contexts/ui';
import Routes from './routes';
import { AppErrorPanel, AppNetworkPanel } from './components/molecules';
import * as NetworkContext from './contexts/network';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  const [applicationState, setApplicationState] = useState(UiContext.createApplicationInitialState());
  const [error, setError] = useState(UiContext.createErrorInitialState());
  const [snackbar, setSnackbar] = useState(UiContext.createSnackbarInitialState());
  const onDismissSnackBar = useCallback(() => {
    setSnackbar(UiContext.createSnackbarInitialState());
  }, []);
  const [networkState, dispatchNetworkActions] = useReducer(
    NetworkContext.reducer,
    NetworkContext.createInitialNetworkState()
  );

  return (
    <PaperProvider>
      <Provider store={AppStore}>
        <UiContext.Context.Provider
          value={{ error, setError, snackbar, setSnackbar, applicationState, setApplicationState }}
        >
          <NetworkContext.Context.Provider value={{ networkState, dispatchNetworkActions }}>
            <SafeAreaView style={styles.container}>
              <Routes />
              <AppErrorPanel />
              <AppNetworkPanel />
              <Snackbar
                visible={snackbar.visible}
                onDismiss={onDismissSnackBar}
                action={{
                  label: snackbar.label,
                  onPress: onDismissSnackBar,
                }}
              >
                {snackbar.message}
              </Snackbar>
            </SafeAreaView>
          </NetworkContext.Context.Provider>
        </UiContext.Context.Provider>
      </Provider>
    </PaperProvider>
  );
};

export default App;
