import {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { getStyle } from './style';
import { getGlobalStyles } from '@/lib/styles';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { CrossSvg } from '@/assets/svg';
import { useAppDispatch, useUserParameters } from '@/store/selectors';
import { setIsShowingSheet } from '@/store/user-parameters/slice';

interface IBottomSheetProps {
  titleText: string;
  onPressNext: () => void;
}

const BottomSheet: FC<PropsWithChildren<IBottomSheetProps>> = ({
  titleText,
  onPressNext,
  children,
}) => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isShowingSheet } = useUserParameters();

  if (!isShowingSheet) return null;

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.cross}
          onPress={() => dispatch(setIsShowingSheet(false))}
        >
          <CrossSvg />
        </TouchableOpacity>
        <Text style={[globalStyles.mainButtonText, styles.title]}>
          {titleText}
        </Text>
        <TouchableOpacity onPress={onPressNext}>
          <Text style={[globalStyles.mainButtonText, styles.next]}>
            {t('registration.birthDateBlock.bottomSheetNext')}
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default BottomSheet;
