import { FC, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getStyle } from './style';
import { getGlobalStyles } from '@/lib/styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeftSvg } from '@/assets/svg';
import SmoothPinCodeInput from '@dreamwalk-os/react-native-smooth-pincode-input';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RegistrationStackList } from '@/types/navigation';

const CORRECT_PIN = '000000';

const CodeScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();

  const [code, setCode] = useState('');
  const [isError, setIsError] = useState(false);
  const pinInput = useRef<SmoothPinCodeInput>(null);

  const navigation =
    useNavigation<NativeStackNavigationProp<RegistrationStackList>>();

  const handleFulfill = (enteredCode: string) => {
    if (enteredCode === CORRECT_PIN) {
      navigation.navigate('PersonnalInfoScreen');
    } else {
      console.log('❌ Wrong PIN');
      setIsError(true);
      pinInput.current?.shake?.().then(() => setCode(''));

      setTimeout(() => {
        setIsError(false);
        setCode('');
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[globalStyles.backButton, styles.backBtn]}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftSvg />
      </TouchableOpacity>
      <Text style={[globalStyles.title, styles.title]}>
        {' '}
        {t('verifyCode.title')}
      </Text>
      <Text style={[globalStyles.commonText, styles.text]}>
        {t('verifyCode.instruction')}
      </Text>
      <Text style={[globalStyles.commonText, styles.mailText]}>
        optysunuser@gmail.com
      </Text>
      <View style={styles.codeContainer}>
        <SmoothPinCodeInput
          ref={pinInput}
          value={code}
          codeLength={6}
          onTextChange={setCode}
          onFulfill={handleFulfill}
          restrictToNumbers
          cellSize={48}
          cellSpacing={6}
          autoFocus
          cellStyle={[styles.cellStyle, isError && { borderColor: 'red' }]}
          cellStyleFocused={[
            styles.cellStyleFocused,
            isError && { borderColor: 'red' },
          ]}
          textStyle={[globalStyles.title, isError && { color: 'red' }]}
          textStyleFocused={[
            styles.textStyleFocused,
            isError && { color: 'red' },
          ]}
          placeholder="—"
        />
      </View>
      <Text style={[globalStyles.commonText, styles.text]}>
        {t('verifyCode.didntReceive')}
      </Text>
      <TouchableOpacity>
        <Text style={[globalStyles.commonText, styles.resendCode]}>
          {t('verifyCode.resend')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CodeScreen;
