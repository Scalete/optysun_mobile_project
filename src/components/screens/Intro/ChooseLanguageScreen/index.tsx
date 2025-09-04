import { FC, useMemo } from 'react';
import { getStyle } from './style';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IntroStackList } from '@/types/navigation';
import i18n from '@/lib/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getGlobalStyles } from '@/lib/styles';

const ChooseLanguageScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const navigation = useNavigation<NativeStackNavigationProp<IntroStackList>>();

  const handleChangeLanguage = async (lang: 'en' | 'uk') => {
    await i18n.changeLanguage(lang);
    await AsyncStorage.setItem('appLanguage', lang);
    navigation.navigate('ConnectDeviceScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.title, styles.title]}>
        Select your language{'\n'}Оберіть мову
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[globalStyles.mainButton, styles.langBtn]}
          onPress={() => handleChangeLanguage('en')}
        >
          <Text style={[globalStyles.mainButtonText, styles.langBtnText]}>
            English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.mainButton, styles.langBtn]}
          onPress={() => handleChangeLanguage('uk')}
        >
          <Text style={[globalStyles.mainButtonText, styles.langBtnText]}>
            Українська
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.additionalText}>
        You can change the{'\n'} language in the app later. {'\n'}Мову можна
        змінити в додатку.
      </Text>
    </View>
  );
};

export default ChooseLanguageScreen;
