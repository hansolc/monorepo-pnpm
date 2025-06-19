import clsx from "clsx";
import { Section } from "@monorepo-pnpm/shared";

function Footer({ className }: { className?: string }) {
  return (
    <Section className={clsx(className)} as="footer">
      Footer 영역
    </Section>
  );
}

export default Footer;
