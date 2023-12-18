import React from "react";
import { Skill } from "./Skill";
import { JavaScriptIcon } from "./JavascriptIcon";
import { TypeScriptIcon } from "./TypescriptIcon";
import { ReactIcon } from "./ReactIcon";
// import { NextJsIcon } from "./NextJsIcon";
import { NodeJsIcon } from "./NodeJsIcon";
import { ExpressJsIcon } from "./ExpressJsIcon";
import { NestJsIcon } from "./NestJsIcon";
import { SocketIoIcon } from "./SocketIoIcon";
// import { PostgreSQLIcon } from "./PostgreSQLIcon";
import { MongoDBIcon } from "./MongoDBIcon";
import { SassIcon } from "./SassIcon";
// import { TailwindcssIcon } from "./TailwindcssIcon";
import { FigmaIcon } from "./FigmaIcon";
import { CypressIcon } from "./CypressIcon";
import { StorybookIcon } from "./StorybookIcon";
import { GitIcon } from "./GitIcon";
const skills = [
  {
    icon: <JavaScriptIcon />,
    title: "JavaScript",
  },
  {
    icon: <TypeScriptIcon />,
    title: "TypeScript",
  },
  {
    icon: <ReactIcon />,
    title: "React",
  },
  // {
  //   icon: <NextJsIcon />,
  //   title: "Next.js",
  // },
  {
    icon: <NodeJsIcon />,
    title: "Node.js",
  },
  {
    icon: <ExpressJsIcon />,
    title: "Express.js",
  },
  {
    icon: <NestJsIcon />,
    title: "Nest.js",
  },
  {
    icon: <SocketIoIcon />,
    title: "Socket.io",
  },
  // {
  //   icon: <PostgreSQLIcon />,
  //   title: "PostgreSQL",
  // },
  {
    icon: <MongoDBIcon />,
    title: "MongoDB",
  },
  {
    icon: <SassIcon />,
    title: "Sass",
  },
  // {
  //   icon: <TailwindcssIcon />,
  //   title: "Tailwindcss",
  // },
  {
    icon: <FigmaIcon />,
    title: "Figma",
  },
  {
    icon: <CypressIcon />,
    title: "Cypress",
  },
  {
    icon: <StorybookIcon />,
    title: "Storybook",
  },
  {
    icon: <GitIcon />,
    title: "Git",
  },
  {
    icon: <FigmaIcon />,
    title: "Figma",
  },
  {
    icon: <CypressIcon />,
    title: "Cypress",
  },
  {
    icon: <StorybookIcon />,
    title: "Storybook",
  },
  {
    icon: <JavaScriptIcon />,
    title: "JavaScript",
  },
  {
    icon: <TypeScriptIcon />,
    title: "TypeScript",
  },
  {
    icon: <ReactIcon />,
    title: "React",
  },
  // {
  //   icon: <NextJsIcon />,
  //   title: "Next.js",
  // },
  {
    icon: <NodeJsIcon />,
    title: "Node.js",
  },
  {
    icon: <ExpressJsIcon />,
    title: "Express.js",
  },
];
export const Skills = () => {
  const SetOfSkills = [];
  skills.forEach((skill) => {
    SetOfSkills.push(<Skill icon={skill.icon} title={skill.title} />);
  });
  return (
    <div className="flex flex-col justify-center sm: mx-auto">
      <p className="mx-auto w-16 h-8 flex justify-center m-auto rounded-2xl bg-gray-300">
        Skills
      </p>
      <p className="mx-auto my-8">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="flex mt-8 flex-wrap justify-center">{SetOfSkills}</div>
    </div>
  );
};
