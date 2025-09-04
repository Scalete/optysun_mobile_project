import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    title: {},
    container: {
      height: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    content: {
      gap: 23,
      marginTop: 'auto',
    },
    contentWrapper: {
      gap: 7,
    },
    button: {
      marginTop: 'auto',
      marginBottom: 25,
    },
    forgotPassword: {
      textAlign: 'right',
      letterSpacing: RFValue(13) * (-7 / 100),
      textDecorationLine: 'underline',
      ...text(Fonts.Roman, RFValue(13), 24, '#003ABB'),
    },
  });

  return styles;
};
