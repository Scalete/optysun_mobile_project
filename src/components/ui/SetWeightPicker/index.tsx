import { FC, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { WheelPicker } from 'react-native-infinite-wheel-picker';
import { getStyle } from './style';
import { useAppDispatch } from '@/store/selectors';
import { setWeight } from '@/store/user-parameters/slice';

const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(max, v));

const SetWeightPicker: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();

  const units = ['kg', 'lb'];

  const [unit, setUnit] = useState<{ index: number; value: string }>({
    index: 0,
    value: 'kg',
  });
  const [weight, setWeightValue] = useState<{ index: number; value: number }>({
    index: 0,
    value: 20,
  });

  const weightArray = useMemo(() => {
    return unit.value === 'kg'
      ? Array.from({ length: 281 }, (_, i) => 20 + i) // 20..300
      : Array.from({ length: 616 }, (_, i) => 45 + i); // 45..660
  }, [unit.value]);

  const weightArrayStrings = useMemo(
    () => weightArray.map(v => String(v)),
    [weightArray],
  );

  useEffect(() => {
    setWeightValue(prev => {
      const safeIndex = clamp(prev.index, 0, weightArray.length - 1);
      const value = weightArray[safeIndex];
      if (safeIndex === prev.index && value === prev.value) return prev;
      return { index: safeIndex, value };
    });
  }, [weightArray]);

  useEffect(() => {
    dispatch(setWeight(`${weight.value} ${unit.value}`));
  }, [weight.value, unit.value, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.wheelPickerContainer}>
        <WheelPicker
          key={`numbers-${unit.value}`}
          restElements={2}
          data={weightArrayStrings}
          initialSelectedIndex={clamp(
            weight.index,
            0,
            weightArrayStrings.length - 1,
          )}
          selectedIndex={clamp(weight.index, 0, weightArrayStrings.length - 1)}
          onChangeValue={(index, value) => {
            const idx =
              typeof index === 'number' ? index : parseInt(String(index), 10);
            const safeIdx = clamp(idx, 0, weightArray.length - 1);
            const numeric = Number.isFinite(Number(value))
              ? Number(value)
              : weightArray[safeIdx];
            setWeightValue({ index: safeIdx, value: numeric });
          }}
          elementHeight={40}
          elementTextStyle={styles.elementTextStyle}
          selectedLayoutStyle={styles.numbersLayoutStyle}
          infiniteScroll={false}
        />

        <WheelPicker
          restElements={2}
          data={units}
          initialSelectedIndex={clamp(unit.index, 0, units.length - 1)}
          selectedIndex={clamp(unit.index, 0, units.length - 1)}
          onChangeValue={(index, value) => {
            const idx =
              typeof index === 'number' ? index : parseInt(String(index), 10);
            const safeIdx = clamp(idx, 0, units.length - 1);
            setUnit({ index: safeIdx, value: String(value) });
          }}
          elementHeight={40}
          elementTextStyle={styles.elementTextStyle}
          selectedLayoutStyle={styles.textLayoutStyle}
          infiniteScroll={false}
        />
      </View>
    </View>
  );
};

export default SetWeightPicker;
