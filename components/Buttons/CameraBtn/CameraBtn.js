import * as React from 'react';
import Svg, { Circle, G, Path, Defs, ClipPath } from 'react-native-svg';

function CameraBtn(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={30} cy={30} r={30} fill="#fff" />
      <G clipPath="url(#clip0_32_29)" fill="#BDBDBD">
        <Path d="M30 33.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
        <Path d="M27 20l-1.83 2H22c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V24c0-1.1-.9-2-2-2h-3.17L33 20h-6zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
      </G>
      <Defs>
        <ClipPath id="clip0_32_29">
          <Path fill="#fff" transform="translate(18 18)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CameraBtn;
