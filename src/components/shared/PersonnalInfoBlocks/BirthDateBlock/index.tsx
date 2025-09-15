import { getGlobalStyles } from '@/lib/styles';
import { FC, useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { useAppDispatch, useUserParameters } from '@/store/selectors';
import { toggleSheet } from '@/store/user-parameters/slice';

const BirthDateBlock: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { birthDate } = useUserParameters();

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.title, styles.title]}>
        {t('registration.birthDateBlock.title')}
      </Text>

      <Text style={[globalStyles.commonText, styles.descriptionText]}>
        <Trans
          i18nKey="registration.birthDateBlock.text"
          components={{ bold: <Text style={styles.boldText} /> }}
        />
      </Text>

      <TouchableOpacity
        style={[globalStyles.input, styles.birthDateBlock]}
        onPress={() => dispatch(toggleSheet())}
      >
        <Text
          style={[
            globalStyles.mainButtonText,
            globalStyles.placeholderInputColor,
            styles.birthDateText,
          ]}
        >
          {birthDate.length ? birthDate : 'dd.mm.yyyy'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BirthDateBlock;
