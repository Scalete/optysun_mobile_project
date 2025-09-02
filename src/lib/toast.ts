import Toast from 'react-native-toast-message';

export const showSuccess = (msg: string, title: string = 'Hello 👋') => {
  Toast.show({
    type: 'success',
    position: 'bottom',
    text1: title,
    text2: msg,
  });
};

export const showError = (
  msg: string = 'Error',
  title: string = 'Hello 👋',
) => {
  Toast.show({
    type: 'error',
    position: 'bottom',
    text1: title,
    text2: msg,
  });
};
