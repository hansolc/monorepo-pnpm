import React from "react";
import Herobanner from "@/components/Herobanner";

function HomeHeroBanner() {
  return (
    <div className="h-[258px]">
      <Herobanner
        bg={{
          image: "/img/home_rest_img.png",
        }}
        ariaLabel="About page Hero Banner"
        className="h-full! items-start! py-7 px-4"
        overlay
      >
        <Herobanner.Title className="text-white">
          일본음식점 예약
          <br />
          이제 줄 서지 마세요
        </Herobanner.Title>
      </Herobanner>
    </div>
  );
}

export default HomeHeroBanner;
