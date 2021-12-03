import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from '@react-navigation/native';

class src extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <NavigationContainer>
        <SafeAreaView>
          <Text>Welcome Home</Text>
        </SafeAreaView>
      </NavigationContainer>
    )
  }
}

export default src;