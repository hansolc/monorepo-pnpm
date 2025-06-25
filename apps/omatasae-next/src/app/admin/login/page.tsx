import React from "react";
import Section from "@/components/Section";
import RegistrationForm from "@/components/RegistrationForm";
import AdminLoginHeader from "./components/Header";

function AdminHomepage() {
  return (
    <div className="max-w-[500px] m-auto">
      <AdminLoginHeader />
      <Section padding>
        <RegistrationForm type="login" role="admin" />
      </Section>
    </div>
  );
}

export default AdminHomepage;
