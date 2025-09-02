import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IntroStackList } from '@/types/navigation';
import {
  ChooseLanguageScreen,
  ConnectDeviceScreen,
  LoadingScreen,
} from '@/components';

const Stack = createNativeStackNavigator<IntroStackList>();

const IntroStack = () => {
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
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default IntroStack;
