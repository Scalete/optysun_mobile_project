import { FC, useMemo, useState, useEffect, useRef } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { getGlobalStyles } from '@/lib/styles';
import { useTranslation } from 'react-i18next';

interface ScreenText {
  text: string;
  subtext?: string;
  mainButton?: boolean;
  secondaryButton?: boolean;
  image?: boolean;
  autoAdvance?: boolean;
}

const RulesScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const [activeScreen, setActiveScreen] = useState(0);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const waveAnim = useRef(new Animated.Value(0)).current;

  const screenText: ScreenText[] = [
    {
      text: t('rules.hello'),
      autoAdvance: true,
    },
    {
      text: t('rules.letsGetAcquainted'),
      subtext: t('rules.bottleDescription'),
      mainButton: true,
    },
    {
      text: t('rules.whatCanBottleDo'),
      autoAdvance: true,
    },
    {
      text: t('rules.uvDisinfection'),
      subtext: t('rules.uvDisinfectionDescription'),
      mainButton: true,
    },
    {
      text: t('rules.automaticAndManualModes'),
      subtext: t('rules.automaticAndManualModesDescription'),
      mainButton: true,
    },
    {
      text: t('rules.reminders'),
      subtext: t('rules.remindersDescription'),
      mainButton: true,
      secondaryButton: true,
      image: true,
    },
    {
      text: t('rules.howToUse'),
      autoAdvance: true,
    },
    {
      text: t('rules.fillBottle'),
      mainButton: true,
    },
    {
      text: t('rules.chooseMode'),
      mainButton: true,
    },
    {
      text: t('rules.doNotOpenLid'),
      mainButton: true,
    },
  ];

  const currentScreen = screenText[activeScreen];
  const isLastScreen = activeScreen === screenText.length - 1;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(waveAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(waveAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  useEffect(() => {
    if (currentScreen.autoAdvance) {
      const timer = setTimeout(() => {
        handleNext();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [activeScreen, currentScreen.autoAdvance]);

  // Transition animation
  const handleNext = () => {
    if (isLastScreen) {
      return;
    }

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setActiveScreen(prev => prev + 1);
      slideAnim.setValue(50);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          currentScreen.mainButton && styles.contentWithButton,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.textWrapper}>
          <Text style={[globalStyles.title, styles.title]}>
            {currentScreen.text}
          </Text>
          {currentScreen.subtext && (
            <Text style={[globalStyles.commonText, styles.subtext]}>
              {currentScreen.subtext}
            </Text>
          )}
        </View>

        {currentScreen.image && (
          <Animated.View style={{ opacity: fadeAnim }}>
            <Image
              style={styles.image}
              source={require('@/assets/images/reminders_bg.png')}
            />
          </Animated.View>
        )}

        <View style={styles.actionWrapper}>
          {currentScreen.mainButton && (
            <TouchableOpacity
              style={[globalStyles.mainButton, styles.mainButton]}
              onPress={handleNext}
            >
              <Text
                style={[globalStyles.mainButtonText, styles.mainButtonText]}
              >
                {isLastScreen ? t('rules.finish') : t('rules.next')}
              </Text>
            </TouchableOpacity>
          )}
          {currentScreen.secondaryButton && (
            <TouchableOpacity
              style={[globalStyles.mainButton, styles.secondaryButton]}
              onPress={handleNext}
            >
              <Text
                style={[
                  globalStyles.mainButtonText,
                  styles.secondaryButtonText,
                ]}
              >
                {t('rules.setupLater')}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </View>
  );
};

export default RulesScreen;
