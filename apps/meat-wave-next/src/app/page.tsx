import { vars } from "@/styles/theme/theme.css";
import Herobanner from "./components/HomeHerobanner";
import Section from "@components/Section";

export default function Home() {
  return (
    <>
      <Herobanner />
      <main>
        <Section>
          <Section.Title
            subtitle={{ text: "BUSINESS", color: vars.colors.primary }}
          >
            SOLUTION
          </Section.Title>
        </Section>
        <Section>
          <Section.Title
            subtitle={{ text: "BUSINESS", color: vars.colors.primary }}
          >
            SOLUTION
          </Section.Title>
        </Section>
        <Section>
          <Section.Title
            subtitle={{ text: "BUSINESS", color: vars.colors.primary }}
          >
            SOLUTION
          </Section.Title>
        </Section>
        <Section>
          <Section.Title
            subtitle={{ text: "BUSINESS", color: vars.colors.primary }}
          >
            SOLUTION
          </Section.Title>
        </Section>
      </main>
    </>
  );
}
