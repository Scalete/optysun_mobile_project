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
    commonText: {
      textAlign: 'center',
      letterSpacing: RFValue(13) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(13), RFValue(15), '#818181'),
    },
    mainButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#003ABB',
      borderRadius: 16,
      paddingVertical: 17,
      paddingHorizontal: 10,
    },
    mainButtonText: {
      textAlign: 'center',
      letterSpacing: RFValue(18) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(18), RFValue(24), '#fff'),
    },
    inputWrapper: {
      gap: 5,
    },
    input: {
      height: 58,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#EFEFEF',
      paddingHorizontal: 22,
      letterSpacing: RFValue(18) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(18), RFValue(24), '#202020'),
    },
    placeholderInputColor: {
      color: '#EFEFEF',
    },
    inputEye: {
      position: 'absolute',
      right: 12,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
    errorWrapper: {
      marginLeft: 17,
      gap: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    errorText: {
      letterSpacing: RFValue(13) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(13), RFValue(24), '#BB0000'),
    },
    backButton: {
      position: 'absolute',
      top: 10,
      left: 16,
      borderWidth: 1,
      borderColor: '#EFEFEF',
      borderRadius: 10,
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return globalStyles;
};
