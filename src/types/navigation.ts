import { NavigatorScreenParams } from '@react-navigation/native';

export type IntroStackList = {
  LoadingScreen: undefined;
  ChooseLanguageScreen: undefined;
  ConnectDeviceScreen: undefined;
};

export type RegistrationStackList = {
  RegistrationScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
};

export type RootStackParamList = {
  Intro: NavigatorScreenParams<IntroStackList>;
  Registration: NavigatorScreenParams<RegistrationStackList>;
};
