import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowLeftSvg: FC = () => {
  return (
    <Svg width="13" height="26" viewBox="0 0 13 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.62177 13L11.282 20.6603L9.75019 22.1921L1.32402 13.7659C1.12093 13.5628 1.00684 13.2873 1.00684 13C1.00684 12.7127 1.12093 12.4372 1.32402 12.2341L9.75019 3.80792L11.282 5.33976L3.62177 13Z"
        fill="#EFEFEF"
      />
    </Svg>
  );
};

export default ArrowLeftSvg;
