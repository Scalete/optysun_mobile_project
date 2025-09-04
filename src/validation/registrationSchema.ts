import * as yup from 'yup';
import i18n from '@/lib/i18n';

export const loginSchema = yup.object({
  email: yup
    .string()
    .required(() => i18n.t('registration.emailRequired'))
    .email(() => i18n.t('registration.invalidEmail'))
    .max(50, () => i18n.t('registration.emailMax')),
  password: yup
    .string()
    .required(() => i18n.t('registration.passwordRequired')),
});

export const signupSchema = loginSchema.shape({
  password: yup
    .string()
    .required(() => i18n.t('registration.passwordRequired'))
    .min(6, () => i18n.t('registration.passwordMin'))
    .max(20, () => i18n.t('registration.passwordMax'))
    .matches(/[A-Z]/, () => i18n.t('registration.passwordUppercase'))
    .matches(/[a-z]/, () => i18n.t('registration.passwordLowercase'))
    .matches(/\d/, () => i18n.t('registration.passwordNumber'))
    .matches(/[!@#$%^&*]/, () => i18n.t('registration.passwordSpecialChar')),
  rules: yup
    .boolean()
    .required(() => i18n.t('registration.acceptTerms'))
    .oneOf([true], () => i18n.t('registration.acceptTerms')),
});
