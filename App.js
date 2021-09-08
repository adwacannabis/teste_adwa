import React, { useState } from 'react';
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import reducers from "./src/reducers";
import AppLoading from 'expo-app-loading';
import Routes from './src/Routes.js';

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default function App() {
  const [isReady, setReady] = useState(false);

  const _loadResourcesAsync = async () => {
    await Promise.all([
      
    ]);
  };

  const _handleLoadingError = (error) => {
    console.warn({ error });
  };
  
  return (
    isReady === false ? (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onFinish={() => setReady(true)}
        onError={_handleLoadingError}
      />
    ) : (
      <Provider store={store}>
            <Routes />
      </Provider>
    )
  );
}
