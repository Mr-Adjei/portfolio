// react
import * as React from "react";
// css-types
import { Property } from "csstype";
// @mui
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
// type
export interface NextjsProps extends SvgIconProps {
  bgColor?: Property.Fill;
  textColor?: Property.Fill;
}

const Nextjs: React.FunctionComponent<NextjsProps> = (props) => {
  const {
    bgColor = "#300",
    textColor = "#ff9a00",
    viewBox = "0 0 24 24",
    focusable = false,
    "aria-hidden": ariaHidden = true,
    ...otherProps
  } = props;

  return (
    <SvgIcon
      viewBox={viewBox}
      focusable={focusable}
      aria-hidden={ariaHidden}
      {...otherProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 100 100"
      >
        <path d="M 24 4 C 12.972 4 4 12.972 4 24 C 4 35.028 12.972 44 24 44 C 35.028 44 44 35.028 44 24 C 44 12.972 35.028 4 24 4 z M 24 7 C 33.374 7 41 14.626 41 24 C 41 29.852 38.027672 35.020078 33.513672 38.080078 L 19.742188 17.660156 C 19.375187 17.113156 18.687547 16.874453 18.060547 17.064453 C 17.430547 17.258453 17 17.841 17 18.5 L 17 31.5 C 17 32.328 17.672 33 18.5 33 C 19.328 33 20 32.328 20 31.5 L 20 23.40625 L 30.876953 39.533203 C 28.770953 40.468203 26.448 41 24 41 C 14.626 41 7 33.374 7 24 C 7 14.626 14.626 7 24 7 z M 29.5 15 C 28.672 15 28 15.672 28 16.5 L 28 24.986328 L 31 29.289062 L 31 16.5 C 31 15.672 30.328 15 29.5 15 z"></path>
      </svg>
    </SvgIcon>
  );
};

export default Nextjs;
