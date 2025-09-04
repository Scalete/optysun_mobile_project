import { FC, useMemo, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { getStyle } from './style';
import { getGlobalStyles } from '@/lib/styles';
import { ErrorSvg, EyeSvg } from '@/assets/svg';
import { ShakeableInput } from '@/components';
import { loginSchema } from '@/validation/registrationSchema';

type FormData = {
  email: string;
  password: string;
};

const LoginScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();

  const passwordInputRef = useRef<TextInput>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[globalStyles.title, styles.title]}>
          {t('registration.welcome')}
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
                    onChangeText={onChange}
                    value={value}
                    placeholder={t('registration.inputPassword')}
                    placeholderTextColor={
                      globalStyles.placeholderInputColor.color
                    }
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

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>
              {t('registration.forgetPassword')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Submit */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={[globalStyles.mainButton, styles.button]}
      >
        <Text style={[globalStyles.mainButtonText, styles.buttonText]}>
          {t('registration.login')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
