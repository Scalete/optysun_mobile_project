import { FC, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import i18n from '@/lib/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const TestingHeader: FC = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState<'en' | 'uk'>('en');

  // Загружаем язык из стораджа при монтировании
  useEffect(() => {
    const loadLang = async () => {
      const savedLang = (await AsyncStorage.getItem('appLanguage')) as
        | 'en'
        | 'uk'
        | null;
      if (savedLang) setLang(savedLang);
    };
    loadLang();
  }, []);

  const toggleLang = async () => {
    const newLang = lang === 'en' ? 'uk' : 'en';
    setLang(newLang);
    await AsyncStorage.setItem('appLanguage', newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: 60,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
      }}
    >
      <TouchableOpacity
        onPress={toggleLang}
        style={{
          marginLeft: 'auto',
          paddingVertical: 6,
          paddingHorizontal: 12,
          backgroundColor: '#eee',
          borderRadius: 8,
        }}
      >
        <Text>{lang === 'en' ? 'EN' : 'UK'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestingHeader;
