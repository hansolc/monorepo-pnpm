import Herobanner from "./components/HomeHerobanner";
import Section from "@components/Section";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export default function Home() {
  return (
    <>
      <Herobanner />
      <main>
        <Section1 />
        <Section2 />
        <Section>
          <Section.Title subtitle={{ text: "BUSINESS" }}>
            SOLUTION
          </Section.Title>
        </Section>
        <Section>
          <Section.Title subtitle={{ text: "BUSINESS" }}>
            SOLUTION
          </Section.Title>
        </Section>
      </main>
    </>
  );
}
