import React from "react";
export const Counter = (props) => {
  return (
    <div>
      <p className="text-2xl text-black">{props.count}</p>
      <div>
        <button onClick={props.handlePlus}>+</button>
        <button onClick={props.handleMinus}>-</button>
      </div>
    </div>
  );
};
