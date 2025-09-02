import T, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast {...props} text2NumberOfLines={2} text1NumberOfLines={0} />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast {...props} text2NumberOfLines={2} text1NumberOfLines={0} />
  ),

  info: (props: BaseToastProps) => (
    <InfoToast {...props} text2NumberOfLines={2} text1NumberOfLines={0} />
  ),
};

const Toast = () => {
  return <T config={toastConfig} />;
};

export default Toast;
