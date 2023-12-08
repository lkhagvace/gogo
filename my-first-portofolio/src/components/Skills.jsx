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
];
export const Skills = () => {
  const SetOfSkills = [];
  skills.forEach((skill) => {
    SetOfSkills.push(<Skill icon={skill.icon} title={skill.title} />);
  });
  return <div className="flex justify-center gap-8">{SetOfSkills}</div>;
};
