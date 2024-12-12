import React from 'react';
import {Platform} from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import {router} from 'expo-router';

import {useSession} from '@/context/session-context';

const AppleAuthButton = () => {
  const {signIn} = useSession();

  const onAppleLoginPress = async () => {
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
  };

  if (Platform.OS === 'ios') {
    return (
      <AppleAuthentication.AppleAuthenticationButton
        style={{width: 48, height: 48}}
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={50}
        onPress={onAppleLoginPress}
      />
    );
  }
  return <></>;
};

export default AppleAuthButton;
