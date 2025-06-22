import React from "react";
import LoginHeader from "./components/LoginHeader";
import RegistrationForm from "@/components/RegistrationForm";
import Section from "@/components/Section";

export default function LoginPage() {
  return (
    <>
      <LoginHeader />
      <Section padding>
        <RegistrationForm type="login" />
      </Section>
    </>
  );
}
