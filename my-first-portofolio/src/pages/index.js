import { Counter } from "@/components/Counter";
import { createKey } from "next/dist/shared/lib/router/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  function handlePlus() {
    setCount(count + 1);
  }
  function handleMinus() {
    if (count === 0) return;
    setCount(count - 1);
  }
  const [btn, setBtn] = useState(false);
  const handleClick = () => {
    setBtn(!btn);
  };
  const array = [
    "lkhagva",
    "ider",
    "naraa",
    "orgil",
    "billy",
    "dulguun",
    "namhai",
    "batbold",
    "lkhamjav",
  ];
  const nameArray = [];
  const splittedInput = [];
  const suggest = () => {
    const containerDiv = document.createElement("div");
    const container = document.getElementById("container");
    splittedInput.push(input.value.split(""));
    for (let i = 0; i < array.length; i++) {
      nameArray.push(array[i].split(""));
    }
    const displayWord = document.createElement("p");
    for (let j = 0; j < splittedInput[0].length; j++) {
      for (let k = 0; k < array.length; k++) {
        if (splittedInput[0][j] === nameArray[k][j]) {
          displayWord.innerText = array[k];
        }
      }
    }
    containerDiv.appendChild(displayWord);
    container.appendChild(containerDiv);
    input.value = "";
  };
  const [calculate, setCalculate] = useState(6000);
  let [up, setUp] = useState(false);
  const Stop = () => {
    setUp((up = true));
  };
  const resume = () => {
    setUp((up = false));
  };
  let reduce = () => {
    setCalculate(calculate - 1);
  };
  useEffect(() => {
    let interval = setInterval(() => {
      if (up === false) reduce();
    }, 1000);
    return () => clearInterval(interval);
  }, [calculate, up]);
  return (
    <div className="m-auto flex justify-center">
      <Counter
        count={count}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
      />
      <button
        onClick={handleClick}
        className={`text-white w-24 g-24 flex justify-center ${
          btn === true ? `bg-green-700` : "bg-red-700"
        }`}
      >
        Click me
      </button>
      <div id="container" className="flex flex-col">
        <div>
          <input
            id="input"
            className="bg-black text-white"
            placeholder="write here"
          ></input>
          <button onClick={suggest}>search</button>
        </div>
      </div>
      <div className="mx-96 my-96">
        <button onClick={Stop}>Stop</button>
        <button className="mx-8" onClick={resume}>
          Resume
        </button>
        <button>Lap</button>
        <div className="text-black">
          {Math.trunc(calculate / 3600)} hour {Math.trunc(calculate / 60)} min{" "}
          <span></span>
          {calculate % 60} seconds
        </div>
      </div>
    </div>
  );
}
