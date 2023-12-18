import React from "react";
export const Fiskil = (props) => {
  return (
    <div className="relative flex flex-col w-2/5 h-96 border-solid justify-center gap-4">
      <div className="h-5/6 z-10 w-5/6 absolute flex ml-14">{props.img}</div>

      <div className="ml-8">{props.title}</div>

      <div>
        <p className="ml-8">{props.p}</p>
      </div>
      <div className="flex flex-wrap ml-8 gap-4">{props.skill}</div>
      <div className="ml-8">{props.shareBtn}</div>
    </div>
  );
};
