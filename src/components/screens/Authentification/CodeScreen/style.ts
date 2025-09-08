import { StyleSheet } from 'react-native';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginBottom: 8,
    },
    mailText: {
      color: '#003ABB',
    },
    backBtn: {},
    codeContainer: {
      marginVertical: 23,
    },
    resendCode: {
      color: '#003ABB',
      textDecorationLine: 'underline',
    },
    cellStyle: {
      borderWidth: 1,
      borderColor: '#EFEFEF',
      borderRadius: 10,
      backgroundColor: 'transparent',
    },
    cellStyleFocused: {
      borderColor: '#003ABB',
    },
    textStyleFocused: {
      color: '#003ABB',
    },
  });

  return styles;
};
