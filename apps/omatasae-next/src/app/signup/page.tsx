import React from "react";
import RegistrationForm from "@/components/RegistrationForm";
import Section from "@/components/Section";
import RegisHeader from "./components/RegisHeader";

export default function SignupPage() {
  return (
    <>
      <RegisHeader />
      <Section padding>
        <RegistrationForm type="regis" />
      </Section>
    </>
  );
}
