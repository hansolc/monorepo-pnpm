import HomeButton from "./components/HomeButton";
import HomeHeader from "./components/HomeHeader";
import HomeHeroBanner from "./components/HomeHeroBanner";
import ReservationCard from "./components/ReservationCard";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeHeroBanner />
      <ReservationCard />
      <HomeButton />
    </main>
  );
}
