import { FC, useEffect, useRef, useState } from 'react';
import {
  Text,
  Animated,
  Easing,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type AnimatedTextBlockProps = {
  delay?: number;
  iterations?: number;
  infinite?: boolean;
  textsOriginal: string[];
  textsTranslated: string[];
  textStyle?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  onFinish?: () => void;
};

const AnimatedTextBlock: FC<AnimatedTextBlockProps> = ({
  delay = 2000,
  iterations = 1,
  infinite = false,
  textsOriginal,
  textsTranslated,
  textStyle,
  wrapperStyle,
  onFinish,
}) => {
  const [showOriginal, setShowOriginal] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const animationCount = useRef(0);

  useEffect(() => {
    const animateText = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        setShowOriginal(prev => !prev);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start(() => {
          animationCount.current++;
          if (infinite || animationCount.current < iterations) {
            setTimeout(animateText, delay);
          } else {
            setTimeout(() => {
              onFinish?.();
            }, delay - 1000);
          }
        });
      });
    };

    const timeoutId = setTimeout(animateText, delay);
    return () => clearTimeout(timeoutId);
  }, [delay, iterations, infinite, fadeAnim, onFinish]);

  return (
    <Animated.View style={[wrapperStyle, { opacity: fadeAnim }]}>
      {(showOriginal ? textsOriginal : textsTranslated).map((line, idx) => (
        <Text key={idx} style={textStyle}>
          {line}
        </Text>
      ))}
    </Animated.View>
  );
};

export default AnimatedTextBlock;
