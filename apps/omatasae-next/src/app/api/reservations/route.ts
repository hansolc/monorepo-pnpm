import { connect } from "@/lib/db/dbConfig";
import { ReservationInfoRequestType } from "@/types/reservation";
import { NextRequest, NextResponse } from "next/server";
import Reservation from "@/lib/db/models/reservationModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const body: ReservationInfoRequestType = await request.json();
    console.log(body);
    const newReservation = await Reservation.create({
      ...body,
      state: "WAITING",
    });
    return NextResponse.json({ response: newReservation }, { status: 201 });
  } catch (error) {
    console.error("Reservation creation failed:", error);
    return NextResponse.json(
      { error: "Failed to create reservation" },
      { status: 500 }
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    let reservations = null;

    if (!userId) {
      reservations = await Reservation.find().sort({ createdAt: -1 });
    } else {
      reservations = await Reservation.find({ userId });
    }

    return NextResponse.json({ response: reservations }, { status: 200 });
  } catch (error) {
    console.error("GET reservations error:", error);
    return NextResponse.json(
      { error: "예약 정보를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}
