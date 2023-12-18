import React from "react";
import { Msg } from "../components/Msg";
import { Copy } from "../components/Copy";
import { Call } from "../components/Call";
export const Footer = () => {
  return (
    <footer className="flex flex-col w-90 my-48 gap-4">
      <p className="bg-gray-200 w-24 flex mx-auto justify-center rounded-lg text-gray-400 h-fit">
        Get it touch
      </p>
      <p className="text-gray-400 flex justify-center">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex justify-center gap-2">
        <Msg />
        <p className="flex justify-center my-auto">
          <p className="font-bold text-2xl text-black">
            reachsagarshah@gmail.com
          </p>
        </p>
        <Copy />
      </div>
      <div className="flex justify-center gap-2">
        <Call /> <p className="font-bold text-2xl text-black">+91 8980500565</p>{" "}
        <Copy />
      </div>
      <div className="flex flex-col mx-auto my-4 gap-2">
        <p>You may also find me on these platforms!</p>
        <div className="flex gap-2 justify-center">
          <img className="w-5 h-5" src="/github.svg"></img>
          <img className="w-5 h-5" src="/twit.svg"></img>
          <img className="w-5 h-5" src="/figma.svg"></img>
        </div>
      </div>
    </footer>
  );
};
