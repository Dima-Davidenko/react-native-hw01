import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CloudBtn(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M1 9.5a8.38 8.38 0 00.9 3.8A8.5 8.5 0 009.5 18a8.38 8.38 0 003.8-.9L19 19l-1.9-5.7a8.38 8.38 0 00.9-3.8 8.5 8.5 0 00-4.7-7.6A8.38 8.38 0 009.5 1H9a8.48 8.48 0 00-8 8v.5z"
        stroke="#BDBDBD"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloudBtn;
