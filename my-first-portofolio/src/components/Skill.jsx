import React from "react";
export const Skill = (props) => {
  return (
    <div className="mx-4 my-4">
      {props.icon}
      <p>{props.title}</p>
    </div>
  );
};
