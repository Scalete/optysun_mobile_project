import { Fonts } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textWrapper: {
      flexDirection: 'column',
    },
    mainText: {
      fontSize: RFValue(33),
      color: '#fff',
      fontFamily: Fonts.Black,
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: RFValue(33) * (-5 / 100),
      lineHeight: RFValue(33),
    },
    logo: {
      position: 'absolute',
      bottom: 80,
    },
  });

  return styles;
};
