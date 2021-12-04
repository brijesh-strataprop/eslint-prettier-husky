import React from "react";
import { View } from "react-native";
import 'react-native-gesture-handler';
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
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </View>
  )
}

export default src;