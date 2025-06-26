import React from "react";
import RegistrationForm from "@/components/RegistrationForm";
import Section from "@/components/Section";
import RegisHeader from "./components/RegisHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원가입 | Omatasae",
  robots: {
    index: false,
    follow: false,
  },
};

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
