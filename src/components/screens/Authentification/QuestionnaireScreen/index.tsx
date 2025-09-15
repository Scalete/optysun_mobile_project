import { FC, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { getGlobalStyles } from '@/lib/styles';
import { useTranslation } from 'react-i18next';
import { ArrowLeftSvg } from '@/assets/svg';
import { useAppDispatch, useQuestionnaire } from '@/store/selectors';
import { setStep } from '@/store/questionnaire/slice';

const QuestionnaireScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { step } = useQuestionnaire();

  return (
    <View style={styles.container}>
      {step !== 0 && (
        <TouchableOpacity
          style={globalStyles.backButton}
          onPress={() => {
            dispatch(setStep(step - 1));
          }}
        >
          <ArrowLeftSvg />
        </TouchableOpacity>
      )}
      <Text style={[globalStyles.title, styles.title]}>
        {t('questionnaire')}
      </Text>
    </View>
  );
};

export default QuestionnaireScreen;
