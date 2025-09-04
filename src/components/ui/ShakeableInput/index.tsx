import React, { forwardRef, useEffect } from 'react';
import {
  Animated,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useShake } from '@/hooks/useShake';

interface ShakeableInputProps extends TextInputProps {
  hasError?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const ShakeableInput = forwardRef<TextInput, ShakeableInputProps>(
  ({ hasError = false, containerStyle, style, ...props }, ref) => {
    const { shakeAnim, shake } = useShake();

    useEffect(() => {
      if (hasError) {
        shake();
      }
    }, [hasError, shake]);

    return (
      <Animated.View
        style={[{ transform: [{ translateX: shakeAnim }] }, containerStyle]}
      >
        <TextInput
          ref={ref}
          {...props}
          style={[
            style,
            hasError && {
              borderColor: '#BB0000',
            },
          ]}
        />
      </Animated.View>
    );
  },
);

ShakeableInput.displayName = 'ShakeableInput';

export default ShakeableInput;
