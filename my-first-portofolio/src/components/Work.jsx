import React from "react";
import { CoWork } from "../components/CoWork";
export const Work = () => {
  return (
    <section className="flex m-auto flex-col justify-center gap-8">
      <div className="rounded-2xl bg-gray-200 flex justify-center m-auto text-gray-400 w-32 pt">
        Work
      </div>
      <p className="flex justify-center text-gray-400">
        Some of the noteworthy projects I have built:
      </p>
      <CoWork />
    </section>
  );
};
