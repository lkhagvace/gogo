import React from "react";
export const UpWork = (props) => {
  return (
    <div className="flex justify-around m-auto rounded-2xl border-solid bg-white border-2 w-4/5 h-96 sm: flex-col pl-4">
      <div>{props.title}</div>
      <div className="flex sm: flex-col gap-4">
        {props.exp}
        {props.li}
      </div>
      <div>{props.date}</div>
    </div>
  );
};
