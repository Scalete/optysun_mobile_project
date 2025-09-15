import { getGlobalStyles } from '@/lib/styles';
import { FC, useMemo, useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { useAppDispatch } from '@/store/selectors';
import {
  setDescriptionInfo,
  setStep,
  UserParametersSteps,
} from '@/store/user-parameters/slice';

const DescriptionBlock: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<TextInput>(null);

  const onPressNext = () => {
    if (!inputValue.trim()) {
      inputRef.current?.blur(); // убираем фокус
      setTimeout(() => {
        inputRef.current?.focus(); // ставим обратно через короткий таймаут
      }, 50);
      return;
    }
    dispatch(setDescriptionInfo(inputValue));
    dispatch(setStep(UserParametersSteps.GENDER));
  };

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
        ref={inputRef}
        value={inputValue}
        onChangeText={setInputValue}
        style={[globalStyles.input, styles.input]}
        placeholder={t('registration.descriptionBlock.inputName')}
        placeholderTextColor="#EFEFEF"
      />

      <TouchableOpacity
        style={[globalStyles.mainButton, styles.button]}
        onPress={onPressNext}
      >
        <Text style={[globalStyles.mainButtonText, styles.buttonText]}>
          {t('registration.descriptionBlock.next')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DescriptionBlock;
