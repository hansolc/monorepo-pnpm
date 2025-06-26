import { Metadata } from "next";
import HomeHeader from "./components/header";
import HomeHeroBanner from "./components/HomeHeroBanner";
import ReservationCard from "./components/ReservationCard";

export const metadata: Metadata = {
  title: "Omatasae | 일본 식당 예약 플랫폼",
  description:
    "일본 음식점의 구글 지도 링크와 예약 정보를 입력하면, 대신 예약을 도와드리는 플랫폼입니다.",
  keywords: ["일본 식당", "식당 예약", "일본 여행", "구글 링크", "Omatasae"],
  openGraph: {
    title: "Omatasae | 일본 식당 예약 플랫폼",
    description:
      "일본 여행 중 레스토랑 예약을 대신 도와드립니다. 구글 지도 링크와 인원 정보만 입력하세요!",
    images: [
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
};

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeHeroBanner />
      <ReservationCard idx={1} />
    </main>
  );
}
