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

  const questionsData = [
    {
      title: 'Level of physical activity',
      questions: [
        'Sedentary (desk job, minimal activity)',
        'Moderately active (regular walks',
        'Active (exercise 3–5 times a week)',
        'Very active (daily exercise or physical labor)',
      ],
    },
    {
      title: 'Water drinking habits',
      questions: [
        'I drink water regularly',
        'I often forget to drink',
        'I drink little water',
        'I mostly drink tea/coffee/soft drinks',
      ],
    },
    {
      title: 'Special needs or goals',
      questions: [
        'I want to drink more water',
        'Preparing for training or a marathon',
        'I take medication that requires hydration',
      ],
    },
  ];

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
      <View style={styles.mainWrapper}>
        <Text style={[globalStyles.title, styles.title]}>
          {questionsData[step].title}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={[globalStyles.mainButton, styles.nextBtn]}>
          <Text style={[globalStyles.mainButtonText, styles.nextBtnText]}>
            Next
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[globalStyles.mainButton, styles.skipBtn]}>
          <Text style={[globalStyles.mainButtonText, styles.skipBtnText]}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionnaireScreen;
