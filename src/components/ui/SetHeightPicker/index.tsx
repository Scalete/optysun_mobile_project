import { FC, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { WheelPicker } from 'react-native-infinite-wheel-picker';
import { getStyle } from './style';
import { useAppDispatch } from '@/store/selectors';
import { setHeight } from '@/store/user-parameters/slice';

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

const SetHeightPicker: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();

  const units = ['cm'];

  const [height, setHeightValue] = useState<{ index: number; value: number }>({
    index: 0,
    value: 50,
  });

  const heightArray = useMemo(
    () => Array.from({ length: 201 }, (_, i) => 50 + i),
    [],
  );

  const heightArrayStrings = useMemo(
    () => heightArray.map(v => String(v)),
    [heightArray],
  );

  useEffect(() => {
    dispatch(setHeight(`${height.value} ${units[0]}`));
  }, [height.value, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.wheelPickerContainer}>
        <WheelPicker
          restElements={2}
          data={heightArrayStrings}
          initialSelectedIndex={clamp(
            height.index,
            0,
            heightArrayStrings.length - 1,
          )}
          selectedIndex={clamp(height.index, 0, heightArrayStrings.length - 1)}
          onChangeValue={(index, value) => {
            const idx =
              typeof index === 'number' ? index : parseInt(String(index), 10);
            const safeIdx = clamp(idx, 0, heightArray.length - 1);
            const numeric = Number.isFinite(Number(value))
              ? Number(value)
              : heightArray[safeIdx];
            setHeightValue({ index: safeIdx, value: numeric });
          }}
          elementHeight={40}
          elementTextStyle={styles.elementTextStyle}
          selectedLayoutStyle={styles.numbersLayoutStyle}
          infiniteScroll={false}
        />

        {/* Единицы (фиксированное значение "cm") */}
        <WheelPicker
          restElements={2}
          data={units}
          initialSelectedIndex={0}
          selectedIndex={0}
          // тут onChangeValue можно опустить, т.к. всегда "cm"
          onChangeValue={() => {}}
          elementHeight={40}
          elementTextStyle={styles.elementTextStyle}
          selectedLayoutStyle={styles.textLayoutStyle}
          infiniteScroll={false}
        />
      </View>
    </View>
  );
};

export default SetHeightPicker;
