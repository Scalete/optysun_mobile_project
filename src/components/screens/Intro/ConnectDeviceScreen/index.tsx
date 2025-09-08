import { FC, useMemo, useState } from 'react';
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { getStyle } from './style';
import { EmptyBottleSvg } from '@/assets/svg';
import { getGlobalStyles } from '@/lib/styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';

const ConnectDeviceScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const [isConnected, setIsConnected] = useState(false);
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderConnectedScreen = () => (
    <>
      <Text style={[globalStyles.title, styles.title]}>
        {t('connectDevice.thankYou')}
      </Text>
      <Image
        style={styles.mainImage}
        source={require('@/assets/images/bottle.png')}
      />

      <Text style={styles.additionalText}>A4561934</Text>
      <TouchableOpacity
        style={[globalStyles.mainButton, styles.button]}
        onPress={() =>
          navigation.navigate('Registration', {
            screen: 'RegistrationScreen',
          })
        }
      >
        <Text style={[globalStyles.mainButtonText, styles.buttonText]}>
          {t('connectDevice.startWork')}
        </Text>
      </TouchableOpacity>
    </>
  );

  const renderFailedScreen = () => (
    <>
      <Text style={[globalStyles.title, styles.title]}>
        {t('connectDevice.notFound')}
      </Text>
      <EmptyBottleSvg />

      <Text style={[globalStyles.commonText, styles.failedText]}>
        {t('connectDevice.tryAgain')}
      </Text>
      <TouchableOpacity
        style={[globalStyles.mainButton, styles.button]}
        onPress={() =>
          navigation.navigate('Registration', {
            screen: 'RegistrationScreen',
          })
        }
      >
        <Text style={[globalStyles.mainButtonText, styles.buttonText]}>
          {t('connectDevice.contactSupport')}
        </Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isConnected ? '#81b0ff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsConnected}
        value={isConnected}
        style={styles.switch}
      />
      {isConnected ? renderConnectedScreen() : renderFailedScreen()}
    </View>
  );
};

export default ConnectDeviceScreen;
