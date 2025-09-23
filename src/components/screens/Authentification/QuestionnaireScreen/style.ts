import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    mainWrapper: {
      marginTop: 'auto',
    },
    questionWrapper: {
      gap: 10,
    },
    title: {
      marginBottom: 16,
    },
    actions: {
      marginTop: 'auto',
      marginBottom: 25,
    },
    skipBtn: {
      backgroundColor: 'transparent',
    },
    skipBtnText: {
      color: '#818181',
      textDecorationLine: 'underline',
    },
  });

  return styles;
};
