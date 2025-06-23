import HomeHeader from "./components/HomeHeader";
import HomeHeroBanner from "./components/HomeHeroBanner";
import ReservationCard from "./components/ReservationCard"; // 필요 시 사용

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeHeroBanner />
      <ReservationCard idx={1} />
      {/* <HomeButton /> */}
    </main>
  );
}
