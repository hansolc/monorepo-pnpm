import React from "react";
import Herobanner from "@/components/Herobanner";

function HomeHerobanner() {
  return (
    <Herobanner
      bg={{
        image:
          "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
