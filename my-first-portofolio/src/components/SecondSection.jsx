import React from "react";
export const SecondSection = () => {
  return (
    <section className="flex flex-col gap-16 bg-gray-100">
      <div class="flex m-auto justify-center rounded-2xl h-8 w-32 bg-gray-300 sm: mt-10">
        About me
      </div>
      <div className="sm: flex flex-col">
        <div>
          <img className="h-80 mx-auto" src="/section2img.jpg"></img>
        </div>
        <div className="flex flex-col gap-4 sm: ml-5 my-20 w-full">
          <p className="text-black sm: text-xl">
            Curious about me? Here you have it:
          </p>
          <p className="flex flex-col gap-4">
            <span>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </span>
            <span>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </span>
            <span>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </span>
            <span>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </span>
            <span>Finally, some quick bits about me.</span>
            <div className="flex gap-32">
              <div>
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </div>
              <div>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </div>
            </div>
            <span>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
