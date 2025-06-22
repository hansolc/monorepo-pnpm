import HomeButton from "./comonents/HomeButton";
import HomeHeader from "./comonents/HomeHeader";
import HomeHeroBanner from "./comonents/HomeHeroBanner";
import ReservationCard from "./comonents/ReservationCard";

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
