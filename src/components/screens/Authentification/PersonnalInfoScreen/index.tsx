import { getGlobalStyles } from '@/lib/styles';
import { RootStackParamList } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { getStyle } from './style';
import { ArrowLeftSvg } from '@/assets/svg';
import { Bar } from 'react-native-progress';
import DescriptionBlock from '@/components/shared/PersonnalInfoBlocks/DescriptionBlock';
import { GenderBlock } from '@/components';

const screenWidth = Dimensions.get('window').width;

const PersonnalInfoScreen: FC = () => {
  const styles = useMemo(() => getStyle(), []);
  const globalStyles = useMemo(() => getGlobalStyles(), []);
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={globalStyles.backButton}>
        <ArrowLeftSvg />
      </TouchableOpacity>
      <View style={styles.progress}>
        <Bar
          progress={0.3}
          width={screenWidth * 0.5}
          borderWidth={0}
          unfilledColor="#EFEFEF"
          color={'#003ABB'}
          height={7}
          borderRadius={5}
        />
        <Text style={[globalStyles.commonText, styles.progressText]}>1/5</Text>
      </View>
      {/* <DescriptionBlock /> */}
      <GenderBlock />
    </View>
  );
};

export default PersonnalInfoScreen;
