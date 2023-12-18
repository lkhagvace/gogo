import React from "react";

export const FirstSection = () => {
  return (
    <section className="mt-50 sm: flex flex-col-reverse justify-center xl:flex-row px-16">
      <div className="flex flex-col sm: gap-4 mt-16 pl-4">
        <p className="text-bold text-black sm: text-4xl ">Hi, I'm Ace 👋</p>
        <p className="">
          I have a cure for insomnia. It’s probably worth millions of dollars
          but I’m giving it to you free. It isn’t warm milk or chamomile tea.
          It’s list making. List stuff from your life like all your teachers or
          all the live music you’ve seen or all the Paul Newman movies you’ve
          watched.
        </p>
        <div className="flex flex-col gap-1 mt-5 ">
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
        <div className="sm: flex gap-2">
          <div className="sm: flex w-4 h-80 mt-20 justify-center bg-gray-400 absolute xl:hidden"></div>
          <img className="h-96 w-96 sm: px-6 py-2" src="/me.jpg"></img>
          <div className="sm: flex w-4 h-80 bg-gray-400 absolute ml-96 mt-20 xl:ml-"></div>
        </div>
        <div className="sm: flex w-96 h-4 justify-center bg-gray-400"></div>
      </div>
    </section>
  );
};
