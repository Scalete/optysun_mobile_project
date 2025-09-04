import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Fonts = {
  Black: 'HelveticaNeueCyr-Black',
  Bold: 'HelveticaNeueCyr-Bold',
  Heavy: 'HelveticaNeueCyr-Heavy',
  Light: 'HelveticaNeueCyr-Light',
  Medium: 'HelveticaNeueCyr-Medium',
  Roman: 'HelveticaNeueCyr-Roman',
  Thin: 'HelveticaNeueCyr-Thin',
  UltraLight: 'HelveticaNeueCyr-UltraLight',
};

export const text = (
  fontFamily: string,
  fontSize: number,
  lineHeight: number,
  color: string,
) => ({ fontFamily, fontSize, lineHeight, color });

export const getGlobalStyles = () => {
  const globalStyles = StyleSheet.create({
    title: {
      textAlign: 'center',
      letterSpacing: RFValue(24) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(24), RFValue(24), '#003ABB'),
    },
    mainButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#003ABB',
      borderRadius: 16,
      height: 58,
      paddingHorizontal: 10,
    },
    mainButtonText: {
      textAlign: 'center',
      letterSpacing: RFValue(18) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(18), RFValue(24), '#fff'),
    },
  });

  return globalStyles;
};
