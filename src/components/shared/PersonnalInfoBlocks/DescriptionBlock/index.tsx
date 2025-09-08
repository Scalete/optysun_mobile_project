import { getGlobalStyles } from '@/lib/styles';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC, useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';

const DescriptionBlock: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.title, styles.title]}>
        {t('registration.descriptionBlock.title')}
      </Text>

      <Text style={[globalStyles.commonText, styles.descriptionText]}>
        <Trans
          i18nKey="registration.descriptionBlock.text"
          components={{ bold: <Text style={styles.boldText} /> }}
        />
      </Text>

      <TextInput
        style={[globalStyles.input, styles.input]}
        placeholder={t('registration.descriptionBlock.inputName')}
        placeholderTextColor="#EFEFEF"
      />

      <TouchableOpacity style={[globalStyles.mainButton, styles.button]}>
        <Text style={[globalStyles.mainButtonText, styles.buttonText]}>
          {t('registration.descriptionBlock.next')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DescriptionBlock;
