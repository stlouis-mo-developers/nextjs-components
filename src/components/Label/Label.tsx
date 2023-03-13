import React from "react";

export interface LabelProps {
  text: string;
  className?:string;
}

const Label = (props: LabelProps) => {
  return <label className={props?.className}>{props.text}</label>;
};

export default Label;