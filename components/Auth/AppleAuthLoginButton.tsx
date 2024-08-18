import React from 'react';
import {Platform} from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import {useSession} from '../../context/sessionContext';
import { router } from 'expo-router';

const AppleAuthLoginButton = () => {
  const {signIn} = useSession();
  
  if (Platform.OS === 'ios') {
    return (
      <AppleAuthentication.AppleAuthenticationButton
        style={{width: 48, height: 48}}
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={50}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            // signed in
            console.log(credential);
            if (credential.identityToken) {
              signIn();
              router.replace('/');
            }
          } catch (e: any) {
            if (e.code === 'ERR_REQUEST_CANCELED') {
              // handle that the user canceled the sign-in flow
            } else {
              // handle other errors
            }
          }
        }}
      />
    );
  }
  return <></>;
};

export default AppleAuthLoginButton;
