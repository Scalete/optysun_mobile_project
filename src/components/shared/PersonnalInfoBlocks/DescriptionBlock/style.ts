import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 15,
    },
    title: {
      marginBottom: 6,
    },
    descriptionText: {
      marginBottom: 28,
    },
    boldText: {
      color: '#003ABB',
    },
    input: {
      marginBottom: 45,
    },
  });

  return styles;
};
