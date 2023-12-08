import React from "react";

export const FirstSection = () => {
  return (
    <section className="mt-50 w-90 flex justify-between mx-20">
      <div className="flex flex-col w-1/2 gap-4">
        <h1 className="text-6xl">Hi, I'm Ace 👋</h1>
        <p>
          I have a cure for insomnia. It’s probably worth millions of dollars
          but I’m giving it to you free. It isn’t warm milk or chamomile tea.
          It’s list making. List stuff from your life like all your teachers or
          all the live music you’ve seen or all the Paul Newman movies you’ve
          watched.
        </p>
        <div className="flex flex-col gap-1 mt-5">
          <div className="flex gap-1">
            <img className="w-5 h-5" src="/map-pin.svg"></img>
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-3xl mt-2"></div>
            <p>Available for new project</p>
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <img className="w-5 h-5" src="/github.svg"></img>
          <img className="w-5 h-5" src="/twit.svg"></img>
          <img className="w-5 h-5" src="/figma.svg"></img>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <img className="h-96 w-96" src="/me.jpg"></img>
          <div className="mt-20 ml-1 h-5/6 w-10 bg-gray-400"></div>
        </div>
        <div className="mt-1 ml-11 h-10 w-6/7 bg-gray-400"></div>
      </div>
    </section>
  );
};
