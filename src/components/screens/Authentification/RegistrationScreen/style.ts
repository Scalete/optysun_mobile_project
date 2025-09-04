import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
    },
    title: {
      marginTop: 'auto',
      textAlign: 'center',
    },
    btnContainer: {
      marginTop: 'auto',
      backgroundColor: '#003ABB',
      paddingHorizontal: 16,
      paddingTop: 19,
      paddingBottom: 27,
      gap: 7,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    button: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      gap: 5,
    },
    buttonText: {
      color: '#202020',
    },
    buttonLogin: {
      borderWidth: 1,
      borderColor: '#fff',
    },
    buttonLoginText: {
      color: '#fff',
    },
    switch: {
      position: 'absolute',
      top: 10,
      alignSelf: 'center',
    },
  });

  return styles;
};
