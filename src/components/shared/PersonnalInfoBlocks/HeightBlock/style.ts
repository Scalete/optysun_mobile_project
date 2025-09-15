import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    title: {
      marginBottom: 6,
    },
    descriptionText: {
      marginBottom: 28,
    },
    heightBlock: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginHorizontal: 15,
    },
  });

  return styles;
};
