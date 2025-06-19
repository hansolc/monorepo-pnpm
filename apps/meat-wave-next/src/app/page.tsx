import { vars } from "@/styles/theme/theme.css";
import Herobanner from "./components/Herobanner";
import Section from "@components/Section";

export default function Home() {
  return (
    <>
      <Herobanner />
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
    </>
  );
}
