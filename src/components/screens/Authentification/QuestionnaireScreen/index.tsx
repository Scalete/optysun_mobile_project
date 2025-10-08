import { FC, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { getGlobalStyles } from '@/lib/styles';
import { useTranslation } from 'react-i18next';
import { ArrowLeftSvg } from '@/assets/svg';
import { useAppDispatch, useQuestionnaire } from '@/store/selectors';
import { setAnswer, setStep } from '@/store/questionnaire/slice';
import RadioBlock from '@/components/shared/RadioBlock';
import { useNavigation } from '@react-navigation/native';
import { showError } from '@/lib/toast';
import { RegistrationStackList } from '@/types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const QuestionnaireScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RegistrationStackList>>();
  const { step, answers } = useQuestionnaire();

  const [selected, setSelected] = useState<string | null>(
    answers[step] || null,
  );

  const questionsData = [
    {
      title: t('registration.questionnaire.levelActivity.title'),
      questions: t('registration.questionnaire.levelActivity.options', {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t('registration.questionnaire.waterHabits.title'),
      questions: t('registration.questionnaire.waterHabits.options', {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t('registration.questionnaire.specialGoals.title'),
      questions: t('registration.questionnaire.specialGoals.options', {
        returnObjects: true,
      }) as string[],
    },
  ];

  const isLastStep = step === questionsData.length - 1;

  const handleNext = () => {
    if (!selected) {
      showError('Please select an answer');
      return;
    }

    dispatch(setAnswer({ questionId: step, answer: selected }));

    if (isLastStep) {
      navigation.navigate('RulesScreen');
    } else {
      dispatch(setStep(step + 1));
      setSelected(answers[step + 1] || null);
    }
  };

  const handleSkip = () => {
    if (isLastStep) {
      navigation.navigate('RulesScreen');
    } else {
      dispatch(setStep(step + 1));
      setSelected(answers[step + 1] || null);
    }
  };

  return (
    <View style={styles.container}>
      {step !== 0 && (
        <TouchableOpacity
          style={globalStyles.backButton}
          onPress={() => {
            dispatch(setStep(step - 1));
            setSelected(answers[step - 1] || null);
          }}
        >
          <ArrowLeftSvg />
        </TouchableOpacity>
      )}
      <View style={styles.mainWrapper}>
        <Text style={[globalStyles.title, styles.title]}>
          {questionsData[step].title}
        </Text>
        <View style={styles.questionWrapper}>
          {questionsData[step].questions.map((question, index) => (
            <RadioBlock
              key={index}
              checked={selected === question}
              onPress={() => setSelected(question)}
            >
              {question}
            </RadioBlock>
          ))}
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          style={[globalStyles.mainButton, styles.nextBtn]}
          onPress={handleNext}
        >
          <Text style={[globalStyles.mainButtonText, styles.nextBtnText]}>
            Next
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.mainButton, styles.skipBtn]}
          onPress={handleSkip}
        >
          <Text style={[globalStyles.mainButtonText, styles.skipBtnText]}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionnaireScreen;
