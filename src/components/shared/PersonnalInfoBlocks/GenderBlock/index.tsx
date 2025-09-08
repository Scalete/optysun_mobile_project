import { getGlobalStyles } from '@/lib/styles';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC, useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { GenderFemale, GenderMale } from '@/assets/svg';

const DescriptionBlock: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.title, styles.title]}>
        {t('registration.genderBlock.title')}
      </Text>

      <Text style={[globalStyles.commonText, styles.descriptionText]}>
        <Trans
          i18nKey="registration.genderBlock.text"
          components={{ bold: <Text style={styles.boldText} /> }}
        />
      </Text>
      <View style={styles.genderWrapper}>
        <TouchableOpacity style={styles.genderItem}>
          <GenderMale />
          <Text style={[globalStyles.mainButtonText, styles.genderText]}>
            {t('registration.genderBlock.male')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.genderItem}>
          <GenderFemale />
          <Text style={[globalStyles.mainButtonText, styles.genderText]}>
            {t('registration.genderBlock.female')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DescriptionBlock;
