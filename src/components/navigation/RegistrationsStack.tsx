import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegistrationStackList } from '@/types/navigation';
import { RegistrationScreen } from '@/components';

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
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RegistrationsStack;
