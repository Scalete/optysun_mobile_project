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
      marginBottom: 75,
    },
    boldText: {
      color: '#003ABB',
    },
    genderWrapper: {
      gap: 29,
      alignItems: 'center',
    },
    genderItem: {
      width: 160,
      height: 160,
      borderRadius: 100,
      backgroundColor: '#FAFBFD',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 17,
    },
    genderText: {
      color: '#202020',
    },
  });

  return styles;
};
