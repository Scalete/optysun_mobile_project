import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroStack from './IntroStack';
import RegistrationsStack from './RegistrationsStack';

const RootStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Intro" component={IntroStack} />
        <RootStack.Screen name="Registration" component={RegistrationsStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
