import { getGlobalStyles } from '@/lib/styles';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { useAppDispatch, useUserParameters } from '@/store/selectors';
import { toggleSheet } from '@/store/user-parameters/slice';

const HeightBlock: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { height } = useUserParameters();

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.title, styles.title]}>
        {t('registration.heightBlock.title')}
      </Text>

      <Text style={[globalStyles.commonText, styles.descriptionText]}>
        {t('registration.heightBlock.text')}
      </Text>

      <TouchableOpacity
        style={[globalStyles.input, styles.heightBlock]}
        onPress={() => dispatch(toggleSheet())}
      >
        <Text
          style={[
            globalStyles.mainButtonText,
            globalStyles.placeholderInputColor,
            styles.heightText,
          ]}
        >
          {height.length ? height : 'Height'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeightBlock;
