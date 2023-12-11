import React from "react";
import { UpWork } from "../components/UpWork";

const exps = [
  {
    title: <p className="font-bold text-2xl text-green-400">upwork</p>,
    exp: (
      <p className="font-semibold text-2xl text-black">
        Sr. Frontend Developer
      </p>
    ),
    li: (
      <div>
        <li className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li className="text-gray-500">
          Ut pretium arcu et massa semper, id fringilla leo semper.
        </li>
        <li className="text-gray-500">Sed quis justo ac magna.</li>
        <li className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
      </div>
    ),
    date: <p className="text-grey-200">Nov 2021 - Present</p>,
  },
  {
    title: <p className="font-bold text-2xl text-green-400">upwork</p>,
    exp: <p className="font-semibold text-2xl text-black">Team Lead</p>,
    li: (
      <div>
        <li className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li className="text-gray-500">
          Ut pretium arcu et massa semper, id fringilla leo semper.
        </li>
        <li className="text-gray-500">Sed quis justo ac magna.</li>
        <li className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
      </div>
    ),
    date: <p className="text-grey-200">Nov 2021 - Present</p>,
  },
  {
    title: <p className="font-bold text-2xl text-green-400">upwork</p>,
    exp: (
      <p className="font-semibold text-2xl text-black">Full Stuck Developer</p>
    ),
    li: (
      <div>
        <li className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
      </div>
    ),
    date: <p className="text-grey-200">Nov 2021 - Present</p>,
  },
];
export const CoExp = () => {
  const SetOfExp = [];
  exps.forEach((exp) => {
    SetOfExp.push(
      <UpWork title={exp.title} exp={exp.exp} li={exp.li} date={exp.date} />
    );
  });
  return <div>{SetOfExp}</div>;
};
