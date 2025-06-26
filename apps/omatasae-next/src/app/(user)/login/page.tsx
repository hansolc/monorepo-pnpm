import React from "react";
import LoginHeader from "./components/LoginHeader";
import RegistrationForm from "@/components/RegistrationForm";
import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인 | Omatasae",
  robots: {
    index: false,
    follow: false,
  },
};

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
