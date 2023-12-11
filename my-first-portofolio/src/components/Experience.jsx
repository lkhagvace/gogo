import React from "react";
import { CoExp } from "../components/CoExp";
export const Experience = () => {
  return (
    <section className="flex flex-col mt-50 w-90 gap-8 bg-gray-100 py-16">
      <div className="rounded-2xl bg-gray-200 flex justify-center m-auto text-gray-400 w-32 pt">
        Experience
      </div>
      <p className="flex justify-center text-gray-400">
        Here is a quick summary of my most recent experiences:
      </p>
      <CoExp />
    </section>
  );
};
