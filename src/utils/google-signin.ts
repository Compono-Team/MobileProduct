import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const PROFILE_IMAGE_SIZE = 150;
export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    iosClientId:
      '209522027471-nj0g57d5d7v98b1o3rv3d9b8c2s9ldp6.apps.googleusercontent.com',
    offlineAccess: false,
    profileImageSize: PROFILE_IMAGE_SIZE,
  });
};
