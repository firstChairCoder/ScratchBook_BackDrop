import React from "react";
import Svg, { Path } from "react-native-svg";

const Heart = (props) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 26 22"
    fill="none"
    {...props}
  >
    <Path
      d="M22.077 2.994a5.959 5.959 0 0 0-8.429 0L12.5 4.143l-1.148-1.149a5.96 5.96 0 0 0-8.429 8.428l1.149 1.149 8.428 8.428 8.428-8.428 1.149-1.149a5.96 5.96 0 0 0 0-8.428Z"
      fill={props.color}
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Heart;
