import { BubbleAnimation } from '@/components';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

interface Props {
  color?: string; // основной цвет воды
  waveColor?: string; // цвет волны
  duration?: number; // скорость "заливки"
  style?: ViewStyle; // возможность прокинуть стили
  onFillEnd?: () => void; // коллбек после заливки
}

export const WaterFillAnimation: FC<Props> = ({
  color = '#003ABB',
  waveColor = '#0055dd',
  style,
  onFillEnd,
}) => {
  const waveAnim = useRef(new Animated.Value(0)).current;
  const [showBubbles, setShowBubbles] = useState(false);

  // Запуск анимации волны
  useEffect(() => {
    Animated.loop(
      Animated.timing(waveAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    // сразу показываем пузырьки (если нужно)
    setShowBubbles(true);
    onFillEnd?.();
  }, []);

  const translateX = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -width],
  });

  // контейнер воды с фиксированной высотой
  const waterStyle = useMemo(
    () => ({
      position: 'absolute' as const,
      bottom: 0,
      width,
      height, // фиксируем на весь экран
      backgroundColor: color,
      overflow: 'hidden' as const,
      ...style,
    }),
    [color, style],
  );

  const waveStyle = useMemo(
    () => ({
      position: 'absolute' as const,
      bottom: 0,
      width: width * 2,
      height: 100,
      transform: [{ translateX }],
    }),
    [translateX],
  );

  return (
    <Animated.View style={waterStyle}>
      <Animated.View style={waveStyle}>
        <Svg height="100" width={width * 2}>
          <Path
            d={`M0 40 
              Q ${width / 4} 20, ${width / 2} 40 
              T ${width} 40 
              T ${width * 1.5} 40 
              T ${width * 2} 40
              V100 H0 Z`}
            fill={waveColor}
          />
        </Svg>
      </Animated.View>

      {showBubbles && <BubbleAnimation />}
    </Animated.View>
  );
};
