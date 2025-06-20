import { Herobanner } from "@monorepo-pnpm/shared/server";
import React from "react";

function AboutHerobanner() {
  return (
    <div className="h-[415px]">
      <Herobanner
        bg={{
          image:
            "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        ariaLabel="About page Hero Banner"
        className="h-full!"
      >
        <Herobanner.Overlay />
      </Herobanner>
    </div>
  );
}

export default AboutHerobanner;
