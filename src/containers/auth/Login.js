import React, {useState} from 'react';
import {Keyboard, View, ScrollView, Platform, Button} from 'react-native';
import {connect} from 'react-redux';
import * as userActions from '../../actions/user-actions-types';
import {AuthStyles} from '../../styles';
import {SPTextInput} from '../../components/SPTextInput';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login} = props;

  const onSubmit = () => {
    Keyboard.dismiss();

    const requestObject = {
      ID: 1,
      UserName: username,
      Password: password,
    };

    login({
      data: requestObject,
    });
    console.log('requestObject', requestObject);
  };

  const {
    container,
    content,
    scrollViewStyle,
    emailContainerStyle,
    passwordContainerStyle,
  } = AuthStyles;

  return (
    <View style={container}>
      <View style={content}>
        <ScrollView
          style={scrollViewStyle}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
          keyboardShouldPersistTaps="always">
          <SPTextInput
            containerStyle={emailContainerStyle}
            title={'Email'}
            value={username}
            placeholder={'Email address'}
            returnKeyType="next"
            keyboardType="email-address"
            onChangeText={name => setUsername(name)}
          />
          <SPTextInput
            containerStyle={passwordContainerStyle}
            title={'Password'}
            secureTextEntry={true}
            value={password}
            placeholder={'Password here'}
            returnKeyType="done"
            maxLength={16}
            onChangeText={pass => setPassword(pass)}
          />
          <Button
            onPress={onSubmit}
            style={AuthStyles.buttonStyle}
            title={'Login'}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default connect(null, {
  login: userActions.login,
})(Login);
