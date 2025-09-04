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
    },
    additionalText: {
      textAlign: 'center',
      letterSpacing: RFValue(18) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(18), RFValue(24), '#000000'),
    },
    button: {
      marginTop: 24,
    },
    buttonText: {},
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
