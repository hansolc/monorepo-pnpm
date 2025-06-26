import { getReservation } from "@/actions/reservations";
import { redirect } from "next/navigation";
import React from "react";
import ReservationContent from "./components/ReservationContent";

export default async function AdminHomepage({
  searchParams,
}: {
  searchParams?: { tabs?: string };
}) {
  const tab = searchParams?.tabs ?? "reservation";
  if (!tab) {
    redirect("/admin?tabs=reservation");
  }

  switch (tab) {
    case "reservation":
      const reservations = await getReservation({ limit: 30, skip: 0 });
      return <ReservationContent initialData={reservations} />;
    default:
      return null;
  }
}
