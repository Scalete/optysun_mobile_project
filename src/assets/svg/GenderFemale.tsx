import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

const GenderMale: FC = () => {
  return (
    <Svg width="44" height="68" viewBox="0 0 44 68" fill="none">
      <Path
        d="M22.0031 41.71C27.1143 41.71 32.0161 39.6796 35.6302 36.0655C39.2444 32.4513 41.2748 27.5495 41.2748 22.4383C41.2748 17.3272 39.2444 12.4253 35.6302 8.81121C32.0161 5.19707 27.1143 3.16666 22.0031 3.16666C16.8919 3.16666 11.9901 5.19707 8.37599 8.81121C4.76185 12.4253 2.73145 17.3272 2.73145 22.4383C2.73145 27.5495 4.76185 32.4513 8.37599 36.0655C11.9901 39.6796 16.8919 41.71 22.0031 41.71ZM22.0031 41.71V64.8333M10.4398 53.27H33.5664"
        stroke="#BB00A2"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default GenderMale;
