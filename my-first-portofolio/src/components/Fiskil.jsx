import React from "react";
export const Fiskil = (props) => {
  return (
    <div className="flex flex-wrap flex-col gap-4 justify-center m-auto rounded-2xl border-solid bg-white border-2 h-96 px-20 py-8 w-2/5 relative">
      <div className="h-full z-10 m-auto absolute">{props.img}</div>
      <div>{props.title}</div>
      <div>
        <p>{props.p}</p>
      </div>
      <div className="flex flex-wrap">{props.skill}</div>
      <div>{props.shareBtn}</div>
    </div>
  );
};
