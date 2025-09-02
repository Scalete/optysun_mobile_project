import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    title: {
      marginBottom: 30,
      textAlign: 'center',
      letterSpacing: RFValue(24) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(24), RFValue(24), '#003ABB'),
    },
    additionalText: {
      textAlign: 'center',
      letterSpacing: RFValue(18) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(18), RFValue(24), '#000000'),
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#003ABB',
      borderRadius: 16,
      height: 58,
      paddingHorizontal: 10,
      marginTop: 24,
    },
    buttonText: {
      textAlign: 'center',
      letterSpacing: RFValue(18) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(18), RFValue(24), '#fff'),
    },
    failedText: {
      marginTop: 13,
      textAlign: 'center',
      letterSpacing: RFValue(13) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(13), RFValue(15), '#818181'),
    },
    switch: {
      position: 'absolute',
      top: 10,
    },
  });

  return styles;
};
