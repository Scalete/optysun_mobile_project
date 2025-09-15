import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: 35,
      marginTop: 15,
    },
    wheelPickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },

    elementTextStyle: {
      letterSpacing: RFValue(18) * (-7 / 100),
      ...text(Fonts.Roman, RFValue(18), RFValue(24), '#000'),
      fontWeight: '400',
    },
    containerStyle: { flex: 1 },
    numbersLayoutStyle: {
      backgroundColor: '#E8E8E8',
      borderRadius: 0,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      paddingVertical: 20,
    },
    textLayoutStyle: {
      backgroundColor: '#E8E8E8',
      borderRadius: 0,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      paddingVertical: 20,
    },
  });

  return styles;
};
