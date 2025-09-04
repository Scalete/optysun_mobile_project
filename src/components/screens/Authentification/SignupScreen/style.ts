import { StyleSheet } from 'react-native';

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
  });

  return styles;
};
