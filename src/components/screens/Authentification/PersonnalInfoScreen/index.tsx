import { getGlobalStyles } from '@/lib/styles';
import { RegistrationStackList, RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { ArrowLeftSvg } from '@/assets/svg';
import { Bar } from 'react-native-progress';
import {
  BirthDateBlock,
  BottomSheet,
  DescriptionBlock,
  GenderBlock,
  HeightBlock,
  SetBirthDatePicker,
  SetHeightPicker,
  SetWeightPicker,
  WeightBlock,
} from '@/components';
import { useAppDispatch, useUserParameters } from '@/store/selectors';
import { setStep, UserParametersSteps } from '@/store/user-parameters/slice';

const screenWidth = Dimensions.get('window').width;

const TOTAL_STEPS = Object.keys(UserParametersSteps).length / 2;

const PersonnalInfoScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RegistrationStackList>>();
  const { step } = useUserParameters();
  const dispatch = useAppDispatch();

  const calculateProgress = useCallback(() => {
    const currentStep = step + 1;
    return currentStep / TOTAL_STEPS;
  }, [step]);

  const renderStepBlock = useCallback(() => {
    switch (step) {
      case UserParametersSteps.DESCRIPTION:
        return <DescriptionBlock />;
      case UserParametersSteps.GENDER:
        return <GenderBlock />;
      case UserParametersSteps.BIRTHDATE:
        return <BirthDateBlock />;
      case UserParametersSteps.WEIGHT:
        return <WeightBlock />;
      case UserParametersSteps.HEIGHT:
        return <HeightBlock />;
      default:
        return null;
    }
  }, [step]);

  const renderBottomSheet = useCallback(() => {
    switch (step) {
      case UserParametersSteps.BIRTHDATE:
        return (
          <BottomSheet
            titleText={`${t('registration.birthDateBlock.bottomSheetDate')}`}
            onPressNext={() => {
              dispatch(setStep(UserParametersSteps.WEIGHT));
            }}
          >
            <SetBirthDatePicker />
          </BottomSheet>
        );
      case UserParametersSteps.WEIGHT:
        return (
          <BottomSheet
            titleText={`${t('registration.weightBlock.bottomSheetWeight')}`}
            onPressNext={() => {
              dispatch(setStep(UserParametersSteps.HEIGHT));
            }}
          >
            <SetWeightPicker />
          </BottomSheet>
        );
      case UserParametersSteps.HEIGHT:
        return (
          <BottomSheet
            titleText={`${t('registration.heightBlock.bottomSheetWeight')}`}
            onPressNext={() => {
              navigation.navigate('QuestionnaireScreen');
            }}
          >
            <SetHeightPicker />
          </BottomSheet>
        );
      default:
        return null;
    }
  }, [step, dispatch]);

  return (
    <View style={styles.container}>
      {step !== UserParametersSteps.DESCRIPTION && (
        <TouchableOpacity
          style={globalStyles.backButton}
          onPress={() => {
            if (step > UserParametersSteps.DESCRIPTION) {
              dispatch(setStep(step - 1));
            }
          }}
        >
          <ArrowLeftSvg />
        </TouchableOpacity>
      )}
      <View style={styles.progress}>
        <Bar
          progress={calculateProgress()}
          width={screenWidth * 0.5}
          borderWidth={0}
          unfilledColor="#EFEFEF"
          color={'#003ABB'}
          height={7}
          borderRadius={5}
        />
        <Text style={[globalStyles.commonText, styles.progressText]}>
          {step + 1}/{TOTAL_STEPS}
        </Text>
      </View>
      {renderStepBlock()}

      {renderBottomSheet()}
    </View>
  );
};

export default PersonnalInfoScreen;
