import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrationStackList } from '@/types/navigation';
import {
  CodeScreen,
  LoginScreen,
  PersonnalInfoScreen,
  RegistrationScreen,
  SignupScreen,
} from '@/components';
import TestingHeader from '../shared/TestingHeader';

const Stack = createNativeStackNavigator<RegistrationStackList>();

const RegistrationsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'white' },
        animation: 'fade',
      }}
    >
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{
          header: () => <TestingHeader />,
        }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          header: () => <TestingHeader />,
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          header: () => <TestingHeader />,
        }}
      />
      <Stack.Screen
        name="CodeScreen"
        component={CodeScreen}
        options={{
          header: () => <TestingHeader />,
        }}
      />
      <Stack.Screen
        name="PersonnalInfoScreen"
        component={PersonnalInfoScreen}
        options={{
          header: () => <TestingHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default RegistrationsStack;
