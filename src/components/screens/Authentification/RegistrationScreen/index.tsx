import { getGlobalStyles } from '@/lib/styles';
import { FC, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { AppleSvg, EmailSvg, GoogleSvg } from '@/assets/svg';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

type ButtonConfig = {
  label: string;
  Icon: FC | null;
  isLogin?: boolean;
  onPress?: () => void;
};

const RegistrationScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google user:', userInfo);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const buttons: ButtonConfig[] = [
    { label: 'Continue with Apple', Icon: AppleSvg },
    {
      label: 'Continue with Google',
      Icon: GoogleSvg,
      onPress: handleGoogleSignIn,
    },
    { label: 'Sign up with email', Icon: EmailSvg },
    { label: 'Log in', Icon: null, isLogin: true },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, globalStyles.title]}>
        Choose a sign-up method
      </Text>
      <View style={styles.btnContainer}>
        {buttons.map(({ label, Icon, isLogin, onPress }, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={onPress}
            style={[
              globalStyles.mainButton,
              isLogin ? styles.buttonLogin : styles.button,
            ]}
          >
            {Icon && <Icon />}
            <Text
              style={[
                globalStyles.mainButtonText,
                isLogin ? styles.buttonLoginText : styles.buttonText,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RegistrationScreen;
