import { connect } from "@/lib/db/dbConfig";
import { ReservationInfoRequestType } from "@/types/reservation";
import { NextRequest, NextResponse } from "next/server";
import Reservation from "@/lib/db/models/reservationModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import "@/lib/db/models/userModel";

connect();
export async function POST(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "로그인이 필요합니다." },
        { status: 401 }
      );
    }

    const secret = process.env.JWT_SECRET || "default_secret";
    const decoded = jwt.verify(token, secret) as { id: string };
    const userId = decoded.id;
    const body: ReservationInfoRequestType = await request.json();

    const { link, primaryDate } = body;

    if (!link || !primaryDate) {
      return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
    }

    const newReservation = await Reservation.create({
      ...body,
      userId,
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
    const limit = searchParams.get("limit");
    const skip = searchParams.get("skip");

    const query: { userId?: string; state?: { $ne: string } } = {
      state: { $ne: "DELETED" },
    };

    if (userId) query.userId = userId;

    const reservations = await Reservation.find(query)
      .populate("userId", "username")
      .skip(skip ? Number(skip) : 0)
      .limit(limit ? Number(limit) : 0);

    return NextResponse.json({ response: reservations }, { status: 200 });
  } catch (error) {
    console.error("GET reservations error:", error);
    return NextResponse.json(
      { error: "예약 정보를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { _id, state, selectedDate } = body;

    if (!_id || !state) {
      return NextResponse.json(
        { error: "id와 state는 필수입니다." },
        { status: 400 }
      );
    }

    const updateFields: { state: string; selectedDate?: string } = { state };

    if (selectedDate) {
      updateFields.selectedDate = selectedDate;
    }

    // findByIdAndUpdate는 기본적으로 업데이트 전의 문서를 반환
    // new :true 설정으로 업데이트 후의 문서 반환
    const updated = await Reservation.findByIdAndUpdate(_id, updateFields, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json(
        { error: "해당 예약을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "예약 상태 변경 실패", details: error },
      { status: 500 }
    );
  }
}
