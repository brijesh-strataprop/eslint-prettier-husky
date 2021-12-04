import React, { useState } from 'react';
import {
  Keyboard,
  View,
  ScrollView,
  Platform,
  TextInput,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import * as userActions from '../../actions/user-actions-types';
import { AuthStyles } from '../../styles';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = props;

  onSubmit = () => {
    Keyboard.dismiss();

    const requestObject = {
      ID: 1,
      UserName: username,
      Password: password,
    };

    login({
      data: requestObject,
    });
    console.log('requestObject', requestObject)
  };

  return (
    <View style={AuthStyles.container}>
      <View style={AuthStyles.content}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
          keyboardShouldPersistTaps="always">

          <TextInput
            value={username}
            placeholder={"Email address"}
            returnKeyType="next"
            keyboardType="email-address"
            onChangeText={name => setUsername(name)}
            style={{ marginTop: 40 }}
          />
          <TextInput
            value={password}
            placeholder={"Password here"}
            returnKeyType="done"
            secureTextEntry
            maxLength={16}
            onChangeText={pass => setPassword(pass)}
            style={{ marginVertical: 25 }}
          />
          <Button
            onPress={onSubmit}
            style={AuthStyles.buttonStyle}
            title={"Login"}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default connect(null,
  {
    login: userActions.login,
  }
)(Login);