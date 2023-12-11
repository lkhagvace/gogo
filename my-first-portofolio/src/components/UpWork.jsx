import React from "react";
export const UpWork = (props) => {
  return (
    <div className="flex justify-between m-auto rounded-2xl border-solid bg-white border-2 w-3/5 h-72 px-20 py-8">
      <div>{props.title}</div>
      <div className="flex flex-col w-2/5 gap-4">
        {props.exp}
        {props.li}
      </div>
      <div>{props.date}</div>
    </div>
  );
};
