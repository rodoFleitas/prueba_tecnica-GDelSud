import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M15 8h.01" />
    <Path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
    <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M20.2 20.2l1.8 1.8" />
    <Path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2" />
  </Svg>
);

export default MenuIcon;
