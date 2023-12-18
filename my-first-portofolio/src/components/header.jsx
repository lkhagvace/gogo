import React from "react";
import { Menu } from "../components/Menu";

export const Header = () => {
  return (
    <header class="sm: flex">
      <nav class="sm: flex justify-between">
        <label class="text-3xl">{"<SS/>"}</label>
        <div className="flex gap-4">
          <div class="gap-8 sm:hidden xl:flex">
            <button>About</button>
            <button>Work</button>
            <button>Testimonials</button>
            <button>Contact</button>
            <div class="bg-gray-400 h-5 w-0.5 mt-2"></div>
            <div class="flex gap-4">
              <button>
                <img class="w-5 h-5" src="/sun.svg"></img>
              </button>
              <button class="bg-black text-white rounded-xl w-32">
                Download CV
              </button>
            </div>
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  );
};
