import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from '@/locales/en.json';
import uk from '@/locales/uk.json';

type TranslationResources = {
  en: { translation: typeof en };
  uk: { translation: typeof uk };
};

const resources: Resource = {
  en: { translation: en },
  uk: { translation: uk },
};

const locales = RNLocalize.getLocales();

const initLanguage = async () => {
  const savedLang = await AsyncStorage.getItem('appLanguage');
  const deviceLang = locales[0]?.languageCode === 'uk' ? 'uk' : 'en';
  return savedLang || deviceLang;
};

initLanguage().then(lng => {
  i18n.use(initReactI18next).init<TranslationResources>({
    lng,
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18n;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: TranslationResources['en'];
  }
}
