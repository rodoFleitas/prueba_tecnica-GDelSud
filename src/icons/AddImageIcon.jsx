import * as React from "react";
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

const MenuIcon = (props) => (
    <Svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G opacity="0.5">
            <Path
                d="M20.875 32.25H26.125C30.5 32.25 32.25 30.5 32.25 26.125V20.875C32.25 16.5 30.5 14.75 26.125 14.75H20.875C16.5 14.75 14.75 16.5 14.75 20.875V26.125C14.75 30.5 16.5 32.25 20.875 32.25Z"
                stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></Path>
            <Path
                d="M20.875 21.75C21.8415 21.75 22.625 20.9665 22.625 20C22.625 19.0335 21.8415 18.25 20.875 18.25C19.9085 18.25 19.125 19.0335 19.125 20C19.125 20.9665 19.9085 21.75 20.875 21.75Z"
                stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></Path>
            <Path
                d="M15.3362 29.5813L19.65 26.685C20.3412 26.2213 21.3387 26.2738 21.96 26.8075L22.2487 27.0613C22.9312 27.6475 24.0337 27.6475 24.7162 27.0613L28.3562 23.9375C29.0387 23.3513 30.1412 23.3513 30.8237 23.9375L32.25 25.1625"
                stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></Path>
        </G>
        <G clip-path="url(#clip0_1_2272)">
            <Path d="M30 12.6667V19.3333" stroke="#47BEA3" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></Path>
            <Path d="M26.6667 16H33.3334" stroke="#47BEA3" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></Path>
        </G>
        <Defs>
            <ClipPath id="clip0_1_2272">
                <Rect width="10" height="10" fill="white" transform="translate(25 11)"></Rect>
            </ClipPath>
        </Defs>
    </Svg>
);

export default MenuIcon;
