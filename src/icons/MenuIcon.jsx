import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path stroke="currentColor" d="M4 8l16 0" />
    <Path stroke="currentColor" d="M4 16l16 0" />
  </Svg>
);

export default MenuIcon;
