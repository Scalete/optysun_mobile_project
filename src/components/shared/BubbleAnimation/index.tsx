import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const BubbleAnimation = () => {
  const bubbles = Array.from({ length: 8 }).map(() => ({
    x: width / 3 + Math.random() * (width / 3), // ближе к центру
    size: 6 + Math.random() * 14,
    delay: 500 + Math.random() * 2000, // разное время старта
    drift: (Math.random() - 0.5) * 40, // отклонение по X
  }));

  return (
    <Svg
      height={height}
      width={width}
      style={{ position: 'absolute', bottom: 0 }}
    >
      {bubbles.map((b, i) => (
        <AnimatedBubble key={i} {...b} />
      ))}
    </Svg>
  );
};

const AnimatedBubble = ({ x, size, delay, drift }: any) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay), // запуск не одновременно
      Animated.parallel([
        // вверх
        Animated.timing(translateY, {
          toValue: -height - 100, // поднимаем за экран
          duration: 3000 + Math.random() * 1500,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        // лёгкое смещение вбок
        Animated.timing(translateX, {
          toValue: drift,
          duration: 3000 + Math.random() * 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        // исчезают
        Animated.timing(opacity, {
          toValue: 0,
          duration: 3500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <AnimatedCircle
      cx={x}
      cy={height + size * 2} // чуть ниже экрана => сразу "вылетают"
      r={size / 2}
      fill="white"
      style={{
        transform: [{ translateY }, { translateX }],
        opacity,
      }}
    />
  );
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default BubbleAnimation;
