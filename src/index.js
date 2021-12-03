import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './config/configure-store';
import Navigator from './config/navigator';
import SplashScreen from "react-native-splash-screen";

const { store, persistor } = configureStore();

const src = () => {
  React.useEffect(() => {
    // Hide the splash screen
    SplashScreen.hide()
  }, [])

  return (

    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <SafeAreaView>
          <Navigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>

  )
}

export default src;