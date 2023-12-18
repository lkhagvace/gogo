import React from "react";
import { Fiskil } from "../components/Fiskil";
const works = [
  {
    img: <img className="w-full h-full" src="/me.jpg"></img>,
  },
  {
    title: <p className="font-bold text-2xl text-black">Fiskil</p>,
    p: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
    ),
    skill: (
      <div className="flex flex-wrap gap-2">
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          React
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Next.js
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Typescript
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Nest.js
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          PostgreSQL
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          TailwindCSS
        </span>
      </div>
    ),
    shareBtn: "share",
  },
  {
    title: <p className="font-bold text-2xl text-black">Fiskil</p>,
    p: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
    ),
    skill: (
      <div className="flex flex-wrap gap-2">
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          React
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Next.js
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Typescript
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Nest.js
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          PostgreSQL
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          TailwindCSS
        </span>
      </div>
    ),
    shareBtn: "share",
  },
  {
    img: <img className="w-full h-full" src="/me.jpg"></img>,
  },
  {
    img: <img className="w-full h-full" src="/me.jpg"></img>,
  },
  {
    title: <p className="font-bold text-2xl text-black">Fiskil</p>,
    p: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
    ),
    skill: (
      <div className="flex flex-wrap gap-2">
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          React
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Next.js
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Typescript
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          Nest.js
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          PostgreSQL
        </span>
        <span className="rounded-lg bg-gray-300 text-black px-4 w-fit h-fit">
          TailwindCSS
        </span>
      </div>
    ),
    shareBtn: "share",
  },
];
export const CoWork = () => {
  const SetOfWork = [];
  works.forEach((work) => {
    SetOfWork.push(
      <Fiskil
        img={work.img}
        title={work.title}
        p={work.p}
        skill={work.skill}
        shareBtn={work.shareBtn}
      />
    );
  });
  return (
    <div className="flex flex-wrap justify-center gap-y-32 sm: flex-col">
      {SetOfWork}
    </div>
  );
};
