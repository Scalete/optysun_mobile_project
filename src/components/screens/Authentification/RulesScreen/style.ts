import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingHorizontal: 16,
      zIndex: 1,
    },
    contentWithButton: {
      paddingTop: 100,
      justifyContent: 'space-between',
    },
    textWrapper: {
      gap: 16,
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
    },
    subtext: {
      maxWidth: 300,
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
      marginVertical: 20,
    },
    actionWrapper: {
      gap: 12,
      marginBottom: 25,
    },
    secondaryButton: {
      backgroundColor: 'transparent',
    },
    secondaryButtonText: {
      color: '#818181',
      textDecorationLine: 'underline',
    },
  });

  return styles;
};
