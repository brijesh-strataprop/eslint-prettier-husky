
import { CommonActions, StackActions } from '@react-navigation/native';
import { REHYDRATE } from 'redux-persist';
import { AppNavigator } from '../config/navigator';
import { LOGOUT_SUCCESS, LOGIN_SUCCESS, SOCIAL_SIGNIN_SUCCESS, VERIFY_TWO_FACT_SUCCESS, SIGNUP_SUCCESS, FORGOT_PASSWORD_SUCCESS, VERIFY_OTP_SUCCESS, RESET_PASSWORD_SUCCESS } from '../actions/user-actions-types';
import { GO_BACK, GO_TO, RESET_NAVIGATOR, NESTED_RESET } from '../actions/nav-action-types';

const initialRoute = 'Login';
const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(initialRoute)
);

export default function nav(state = initialState, action) {
  const {
    payload, type,
  } = action;
  let firstState = 'Login';
  const firstStateData = {};

  switch (type) {

    // case LOGIN_SUCCESS:
    //   return AppNavigator.router.getStateForAction(
    //     StackActions.reset({
    //       actions: [
    //         CommonActions.navigate({ routeName: 'Dashboard' }),
    //       ],
    //       index: 0,
    //       key: null,
    //     }),
    //     state
    //   );

    case REHYDRATE:
      return AppNavigator.router.getStateForAction(
        StackActions.reset({
          actions: [
            CommonActions.navigate({
              params: firstStateData,
              routeName: firstState,
            }),
          ],
          index: 0,
        }),
        state
      );


    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}
