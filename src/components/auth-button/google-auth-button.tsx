import React, {useEffect} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  statusCodes,
  isErrorWithCode,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {router} from 'expo-router';

import {configureGoogleSignIn} from '@/utils/google-signIn';
import {useSession} from '@/context/session-context';

const GoogleAuthButton = () => {
  const {signIn} = useSession();

  const onGoogleLoginPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      signIn();
      router.replace('/');
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            break;
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  return (
    <TouchableOpacity
      className="flex justify-center items-center w-[48px] h-[48px] bg-white rounded-full"
      onPress={onGoogleLoginPress}>
      <Image source={require('@/assets/images/auth/google-logo.png')} />
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;
