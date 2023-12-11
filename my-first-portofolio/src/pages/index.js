import { Header } from "../components/header";
import { FirstSection } from "../components/FirstSection";
import { SecondSection } from "../components/SecondSection";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Work } from "../components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-32 w-full">
        <FirstSection />
        <SecondSection />
        <Skills />
        <Experience />
        <Work />
      </main>
    </>
  );
}
