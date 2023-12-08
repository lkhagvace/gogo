import React from "react";

export const Header = () => {
  return (
    <header class="mt-50 w-90 flex items-center">
      <nav class="w-90 flex space-x-4">
        <label class="text-3xl">{"<SS/>"}</label>
        <div class="flex gap-8">
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
      </nav>
    </header>
  );
};
