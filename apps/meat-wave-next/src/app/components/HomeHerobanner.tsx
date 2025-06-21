import React from "react";
import Herobanner from "@/components/Herobanner";

function HomeHerobanner() {
  return (
    <Herobanner
      bg={{
        image:
          "https://png.pngtree.com/png-vector/20221012/ourmid/pngtree-design-a-responsive-landing-page-or-hero-banner-for-a-business-startup-vector-png-image_28436428.png",
      }}
      ariaLabel="Hero Banner"
      overlay
      className="justify-center"
    >
      <Herobanner.Title className="text-white text-center leading-[80px]!">
        데이터 기반의
        <br />
        솔루션을 제공합니다.
      </Herobanner.Title>
    </Herobanner>
  );
}

export default HomeHerobanner;
