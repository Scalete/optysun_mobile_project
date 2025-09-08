import { FC, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getStyle } from './style';
import { getGlobalStyles } from '@/lib/styles';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '@/validation/registrationSchema';
import { Controller, useForm } from 'react-hook-form';
import { ErrorSvg, EyeSvg } from '@/assets/svg';
import { ShakeableInput } from '@/components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RegistrationStackList } from '@/types/navigation';

type FormData = {
  email: string;
  password: string;
  rules: boolean;
};

const SignupScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();

  const passwordInputRef = useRef<TextInput>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RegistrationStackList>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
    defaultValues: { email: '', password: '', rules: false },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    navigation.navigate('CodeScreen');
  };

  console.log(errors);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[globalStyles.title, styles.title]}>
          {t('registration.createAccount')}
        </Text>
        <View style={styles.contentWrapper}>
          <View style={globalStyles.inputWrapper}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <ShakeableInput
                  style={globalStyles.input}
                  onChangeText={onChange}
                  value={value}
                  placeholder={t('registration.inputEmail')}
                  placeholderTextColor={
                    globalStyles.placeholderInputColor.color
                  }
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                  hasError={!!errors.email}
                />
              )}
            />
            {errors.email && (
              <View style={globalStyles.errorWrapper}>
                <ErrorSvg />
                <Text style={globalStyles.errorText}>
                  {errors.email.message}
                </Text>
              </View>
            )}
          </View>

          <View style={globalStyles.inputWrapper}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <View style={{ position: 'relative' }}>
                  <ShakeableInput
                    ref={passwordInputRef}
                    style={globalStyles.input}
                    placeholderTextColor={
                      globalStyles.placeholderInputColor.color
                    }
                    onChangeText={onChange}
                    value={value}
                    placeholder={t('registration.inputPassword')}
                    secureTextEntry={!showPassword}
                    returnKeyType="done"
                    hasError={!!errors.password}
                  />
                  {/* Кнопка глаза */}
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={globalStyles.inputEye}
                  >
                    {showPassword ? <EyeSvg /> : <EyeSvg />}
                  </TouchableOpacity>
                </View>
              )}
            />
            {errors.password && (
              <View style={globalStyles.errorWrapper}>
                <ErrorSvg />
                <Text style={globalStyles.errorText}>
                  {errors.password.message}
                </Text>
              </View>
            )}
          </View>
          <Controller
            control={control}
            name="rules"
            render={({ field: { onChange, value } }) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 8,
                }}
              >
                <BouncyCheckbox
                  isChecked={value}
                  disableText
                  size={18}
                  fillColor={errors.rules ? 'red' : '#0337be'}
                  unFillColor="#FFFFFF"
                  iconStyle={{
                    borderColor: errors.rules ? 'red' : '#0337be',
                    borderRadius: 4,
                  }}
                  innerIconStyle={{ borderWidth: 1, borderRadius: 4 }}
                  textStyle={{ textDecorationLine: 'none' }}
                  useBuiltInState={false}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  onPress={() => onChange(!value)}
                />
                <TouchableOpacity
                  style={{ flex: 1, marginLeft: 8 }}
                  onPress={() => onChange(!value)}
                  activeOpacity={0.7}
                >
                  <Text style={{ color: errors.rules ? 'red' : '#000' }}>
                    {t('registration.acceptTerms')}{' '}
                    <Text
                      style={{ color: errors.rules ? 'red' : '#0337be' }}
                      onPress={() => console.log('Terms pressed')}
                    >
                      {t('registration.terms')}
                    </Text>{' '}
                    {t('registration.and')}{' '}
                    <Text
                      style={{ color: errors.rules ? 'red' : '#0337be' }}
                      onPress={() => console.log('Privacy pressed')}
                    >
                      {t('registration.privacy')}
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>

      {/* Submit */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={[globalStyles.mainButton, styles.button]}
      >
        <Text style={[globalStyles.mainButtonText, styles.buttonText]}>
          {t('registration.signup')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
