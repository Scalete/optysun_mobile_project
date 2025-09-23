import { FC, PropsWithChildren, useMemo, useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import BouncyCheckbox, {
  BouncyCheckboxHandle,
} from 'react-native-bouncy-checkbox';

interface RadioBlockProps extends PropsWithChildren {
  checked: boolean;
  onPress: () => void;
}

const RadioBlock: FC<RadioBlockProps> = ({ children, checked, onPress }) => {
  const styles = useMemo(() => getStyle(), []);
  const checkboxRef = useRef<BouncyCheckboxHandle>(null);

  const handlePress = () => {
    checkboxRef.current?.onCheckboxPress?.();
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.container}>
        <BouncyCheckbox
          ref={checkboxRef}
          isChecked={checked}
          disableText
          size={18}
          fillColor={'#0337be'}
          unFillColor="#FFFFFF"
          iconStyle={styles.iconStyle}
          innerIconStyle={styles.innerIconStyle}
          textStyle={styles.textStyle}
          useBuiltInState={false}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={onPress}
        />
        <Text style={[styles.text]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioBlock;
