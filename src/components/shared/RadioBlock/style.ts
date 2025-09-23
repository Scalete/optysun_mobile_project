import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#EFEFEF',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    iconStyle: {
      borderColor: '#0337be',
      borderRadius: 100,
    },
    innerIconStyle: {
      borderWidth: 1,
      borderRadius: 100,
      borderColor: '#EFEFEF',
    },
    textStyle: { textDecorationLine: 'none' },
    text: {
      flexShrink: 1,
      minWidth: 0,
      marginLeft: 20,
      textDecorationLine: 'none',
    },
  });

  return styles;
};
