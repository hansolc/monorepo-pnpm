import React from "react";
import { Herobanner as Component } from "@monorepo-pnpm/shared/server";

function HomeHerobanner() {
  return (
    <Component
      bg={{
        image:
          "https://png.pngtree.com/png-vector/20221012/ourmid/pngtree-design-a-responsive-landing-page-or-hero-banner-for-a-business-startup-vector-png-image_28436428.png",
      }}
      ariaLabel="Hero Banner"
    >
      <Component.Overlay />
    </Component>
  );
}

export default HomeHerobanner;
