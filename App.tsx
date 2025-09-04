/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Toast, Navigation } from '@/components';
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
    <SafeAreaProvider>
      <Navigation />
      <Toast />
    </SafeAreaProvider>
  );
}

export default App;
