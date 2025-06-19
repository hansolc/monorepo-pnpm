import React from "react";
import { Herobanner as Component } from "@monorepo-pnpm/shared/server";

function Herobanner() {
  return (
    <Component
      bg={
        "https://png.pngtree.com/png-vector/20221012/ourmid/pngtree-design-a-responsive-landing-page-or-hero-banner-for-a-business-startup-vector-png-image_28436428.png"
      }
    >
      <Component.Overlay />
    </Component>
  );
}

export default Herobanner;
