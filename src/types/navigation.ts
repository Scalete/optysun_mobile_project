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
  CodeScreen: undefined;
  PersonnalInfoScreen: undefined;
  QuestionnaireScreen: undefined;
  RulesScreen: undefined;
};

export type RootStackParamList = {
  Intro: NavigatorScreenParams<IntroStackList>;
  Registration: NavigatorScreenParams<RegistrationStackList>;
};
