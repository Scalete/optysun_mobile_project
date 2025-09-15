import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IntroStackList } from '@/types/navigation';
import {
  ChooseLanguageScreen,
  ConnectDeviceScreen,
  LoadingScreen,
} from '@/components';
import TestingHeader from '../shared/TestingHeader';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator<IntroStackList>();

const IntroStack = () => {
  // const navigation = useNavigation();
  // useEffect(() => {
  //   navigation.navigate('Registration', {
  //     screen: 'PersonnalInfoScreen',
  //   });
  // }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'white' },
        animation: 'fade',
      }}
    >
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseLanguageScreen"
        component={ChooseLanguageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConnectDeviceScreen"
        component={ConnectDeviceScreen}
        options={{
          header: () => <TestingHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default IntroStack;
