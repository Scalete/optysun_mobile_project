import { getGlobalStyles } from '@/lib/styles';
import { FC, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View, Switch } from 'react-native';
import { getStyle } from './style';
import { AppleSvg, EmailSvg, GoogleSvg } from '@/assets/svg';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useTranslation } from 'react-i18next';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RegistrationStackList } from '@/types/navigation';

type ButtonConfig = {
  label: string;
  Icon: FC | null;
  isLogin?: boolean;
  onPress?: () => void;
};

const RegistrationScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const [isIOS, setIsIOS] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RegistrationStackList>>();

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google user:', userInfo);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const handleSignIn = () => {
    navigation.navigate('SignupScreen');
  };

  const buttons: ButtonConfig[] = [
    // если iOS — показываем Apple, иначе Google
    isIOS
      ? { label: t('registration.apple'), Icon: AppleSvg }
      : {
          label: t('registration.google'),
          Icon: GoogleSvg,
          onPress: handleGoogleSignIn,
        },
    { label: t('registration.email'), Icon: EmailSvg, onPress: handleSignIn },
    {
      label: t('registration.login'),
      Icon: null,
      isLogin: true,
      onPress: handleLogin,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Переключатель iOS / Android */}
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isIOS ? '#81b0ff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsIOS}
        value={isIOS}
        style={styles.switch}
      />

      <Text style={[styles.title, globalStyles.title]}>
        {t('registration.chooseMethod')}
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
