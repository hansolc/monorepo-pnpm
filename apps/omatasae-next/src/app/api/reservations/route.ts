import { connect } from "@/lib/db/dbConfig";
import { ReservationInfoRequestType } from "@/types/reservation";
import { NextRequest, NextResponse } from "next/server";
import Reservation from "@/lib/db/models/reservationModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const body: ReservationInfoRequestType = await request.json();
    const newReservation = await Reservation.create({
      ...body,
      state: "WAITING",
    });
    return NextResponse.json(newReservation, { status: 201 });
  } catch (error) {
    console.error("Reservation creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create reservation" },
      { status: 500 }
    );
  }
}
