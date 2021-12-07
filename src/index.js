import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import configureStore from './config/configure-store';
import Navigator from './config/navigator';

const codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

const {store, persistor} = configureStore();

const Src = () => {
  const handleCodePush = () => {
    codePush
      .checkForUpdate()
      .then(update => {
        if (update) {
          codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE,
            mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
          });
        }
      })
      .catch(error => {
        // report to error log server
        console.log(`Error: app update - ${error.message}`);
      });
  };

  React.useEffect(() => {
    // Hide the splash screen
    SplashScreen.hide();
    handleCodePush();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default codePush(codePushOptions)(Src);
