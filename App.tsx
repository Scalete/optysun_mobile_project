/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Toast, Navigation, ReduxView } from '@/components';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

GoogleSignin.configure({
  webClientId: 'test',
});

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <ReduxView>
      <SafeAreaProvider>
        <Navigation />
        <Toast />
      </SafeAreaProvider>
    </ReduxView>
  );
}

export default App;
