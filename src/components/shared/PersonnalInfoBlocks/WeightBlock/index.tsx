import { getGlobalStyles } from '@/lib/styles';
import { FC, useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { useAppDispatch, useUserParameters } from '@/store/selectors';
import { toggleSheet } from '@/store/user-parameters/slice';

const WeightBlock: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { weight } = useUserParameters();

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.title, styles.title]}>
        {t('registration.weightBlock.title')}
      </Text>

      <Text style={[globalStyles.commonText, styles.descriptionText]}>
        {t('registration.weightBlock.text')}
      </Text>

      <TouchableOpacity
        style={[globalStyles.input, styles.weightBlock]}
        onPress={() => dispatch(toggleSheet())}
      >
        <Text
          style={[
            globalStyles.mainButtonText,
            globalStyles.placeholderInputColor,
            styles.weightText,
          ]}
        >
          {weight.length ? weight : 'Weight'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeightBlock;
