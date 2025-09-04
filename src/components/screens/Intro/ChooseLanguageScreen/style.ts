import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#1B1B1B',
    },
    additionalText: {
      textAlign: 'center',
      letterSpacing: RFValue(13) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(13), RFValue(15), '#818181'),
    },
    buttons: {
      flexDirection: 'column',
      marginVertical: 15,
      gap: 8,
      width: '100%',
      maxWidth: 266,
      paddingHorizontal: 10,
    },
    langBtn: {
      backgroundColor: '#F8F8F8',
    },
    langBtnText: {
      color: '#000000',
    },
  });

  return styles;
};
