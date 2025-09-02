import { FC, useMemo, useRef } from 'react';
import { Animated, View } from 'react-native';
import { getStyle } from './style';
import { LogoSvg } from '@/assets/svg';
import { AnimatedTextBlock } from '@/components';
import { WaterFillAnimation } from '@/components/shared/WaterFillAnimation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IntroStackList } from '@/types/navigation';

const DELAY = 3000;
const ITERATIONS = 1;
const INFINITE = false;

const LoadingScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<NativeStackNavigationProp<IntroStackList>>();

  const handleFillEnd = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const contentStyle = useMemo(
    () => ({
      flex: 1,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      opacity: fadeAnim,
    }),
    [fadeAnim],
  );

  return (
    <View style={styles.container}>
      {/* Вода с волной */}
      <WaterFillAnimation onFillEnd={handleFillEnd} />

      {/* Контент: текст + логотип */}
      <Animated.View style={contentStyle}>
        <AnimatedTextBlock
          delay={DELAY}
          iterations={ITERATIONS}
          infinite={INFINITE}
          textsOriginal={['Welcome', 'to the world', 'of clean water']}
          textsTranslated={['Ласкаво', 'просимо у світ', 'чистої води']}
          textStyle={styles.mainText}
          wrapperStyle={styles.textWrapper}
          onFinish={() => {
            navigation.replace('ChooseLanguageScreen');
          }}
        />
        <View style={styles.logo}>
          <LogoSvg />
        </View>
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;
