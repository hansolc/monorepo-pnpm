import Section from "@/components/Section";
import ReservationHeader from "./components/ReservationHeader";
import ReservationList from "./components/ReservationList";

function ReservationPage() {
  return (
    <>
      <ReservationHeader />
      <Section padding className="py-4">
        <ReservationList />
      </Section>
    </>
  );
}

export default ReservationPage;
