import { Header } from "../components/header";
import { FirstSection } from "../components/FirstSection";
import { SecondSection } from "../components/SecondSection";
import { Skills } from "../components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-32 w-full">
        <FirstSection />
        <SecondSection />
        <Skills />
      </main>
    </>
  );
}
