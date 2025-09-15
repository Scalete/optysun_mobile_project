import { datesArray, monthsArray, yearsArray } from '@/lib/constants';
import React, { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { WheelPicker } from 'react-native-infinite-wheel-picker';
import { getStyle } from './style';
import { useAppDispatch } from '@/store/selectors';
import { setBirthDate } from '@/store/user-parameters/slice';
import { useTranslation } from 'react-i18next';

const SetBirthDatePicker: React.FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  // месяцы для текущего языка
  const monthsForPicker = useMemo(
    () => monthsArray.map(m => m[i18n.language]),
    [i18n.language],
  );

  // корректная инициализация состояния
  const [month, setMonth] = React.useState({
    index: 0,
    value: monthsForPicker[0],
  });
  const [date, setDate] = React.useState({ index: 0, value: datesArray[0] });
  const [year, setYear] = React.useState({
    index: 0,
    value: yearsArray[yearsArray.length - 20],
  });

  // обновляем месяц при изменении языка
  useEffect(() => {
    setMonth(prev => ({ ...prev, value: monthsForPicker[prev.index] }));
  }, [monthsForPicker]);

  // запись даты в Redux при изменении любого значения
  useEffect(() => {
    const yyyy = year.value;
    const mm = (month.index + 1).toString().padStart(2, '0');
    const dd = date.value.toString().padStart(2, '0');

    dispatch(setBirthDate(`${yyyy}-${mm}-${dd}`)); // "YYYY-MM-DD"
  }, [year, month, date]);

  return (
    <View style={styles.container}>
      <View style={styles.wheelPickerContainer}>
        <WheelPicker
          restElements={2}
          data={monthsForPicker}
          initialSelectedIndex={month.index}
          selectedIndex={month.index}
          onChangeValue={(index, value) => setMonth({ index, value })}
          elementHeight={40}
          containerStyle={styles.containerStyle}
          selectedLayoutStyle={styles.monthSelectedLayoutStyle}
          elementTextStyle={styles.elementTextStyle}
          infiniteScroll={false}
        />
        <WheelPicker
          restElements={2}
          data={datesArray}
          initialSelectedIndex={date.index}
          selectedIndex={date.index}
          onChangeValue={(index, value) =>
            setDate({ index, value: parseInt(value) })
          }
          elementHeight={40}
          elementTextStyle={styles.elementTextStyle}
          selectedLayoutStyle={styles.minutesSelectedLayoutStyle}
          infiniteScroll={false}
        />
        <WheelPicker
          restElements={2}
          data={yearsArray}
          initialSelectedIndex={yearsArray.length - 20}
          selectedIndex={year.index}
          onChangeValue={(index, value) =>
            setYear({ index, value: parseInt(value) })
          }
          elementHeight={40}
          elementTextStyle={styles.elementTextStyle}
          containerStyle={styles.containerStyle}
          selectedLayoutStyle={styles.yearSelectedLayoutPicker}
          infiniteScroll={false}
        />
      </View>
    </View>
  );
};

export default SetBirthDatePicker;
