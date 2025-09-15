import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const CrossSvg: FC = () => {
  return (
    <Svg width="9" height="10" viewBox="0 0 9 10" fill="none">
      <Path
        d="M1 1L4.5 5M8 9L4.5 5M4.5 5L1 9M4.5 5L8 1"
        stroke="#003ABB"
        strokeWidth="2"
      />
    </Svg>
  );
};

export default CrossSvg;
