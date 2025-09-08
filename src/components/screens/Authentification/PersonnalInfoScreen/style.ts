import { Fonts, text } from '@/lib/styles';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'center',
    },
    progress: {
      position: 'absolute',
      top: 31,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      gap: 10,
    },
    progressText: {
      color: '#003ABB',
    },
  });

  return styles;
};
