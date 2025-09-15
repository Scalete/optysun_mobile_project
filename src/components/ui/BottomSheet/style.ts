import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EFEFEF',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingHorizontal: 16,
      overflow: 'hidden',
    },
    header: {
      paddingTop: 17,
      paddingBottom: 11,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color: '#202020',
    },
    next: {
      letterSpacing: RFValue(16) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(16), RFValue(24), '#003ABB'),
    },
    cross: {
      width: 25,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
      backgroundColor: '#FFF',
    },
  });

  return styles;
};
