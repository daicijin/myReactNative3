import React, { useState } from 'react';
import * as UiContext from './contexts/ui';
import Routes from './routes';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  const [applicationState, setApplicationState] = useState(UiContext.createApplicationInitiramState());

  return (
    <PaperProvider>
      <UiContext.Context.Provider value={{ applicationState, setApplicationState }}>
        <Routes />
      </UiContext.Context.Provider>
    </PaperProvider>
  );
};

export default App;
