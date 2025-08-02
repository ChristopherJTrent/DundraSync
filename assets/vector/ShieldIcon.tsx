import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
export const ShieldIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    viewBox="-2.5 0 34 34"
	fill="none"
    {...props}
  >
    <Path
	  stroke="#000"
      d="M14.516 34C-1.414 27.828.032 6.8.032 6.8 9.675 8.578 14.516 0 14.516 0s4.83 8.578 14.452 6.8c0 0 1.443 21.028-14.452 27.2Z"
    />
  </Svg>
)