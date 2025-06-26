import {
  ReservationInfoRequestType,
  ReservationInfoResponseType,
  ReservationInfoType,
  ReservationStatus,
} from "@/types/reservation";

export async function createReservation(info: ReservationInfoType) {
  try {
    const requestInfo: ReservationInfoRequestType = {
      link: info.link,
      peopleCount: Number(info.peopleCount),
      primaryDate: `${info.primaryDate}-${info.primaryTime}`,
      ...(info.secondaryDate && info.secondaryTime
        ? { secondaryDate: `${info.secondaryDate}-${info.secondaryTime}` }
        : {}),
      ...(info.tertiaryDate && info.tertiaryTime
        ? { tertiaryDate: `${info.tertiaryDate}-${info.tertiaryTime}` }
        : {}),
    };
    const res = await fetch(`/api/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestInfo),
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "예약 실패");
    }

    return result.response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("알 수 없는 오류입니다.");
    }
  }
}

export async function getReservation({
  userId,
  limit,
  skip,
}: {
  userId?: string;
  limit?: number;
  skip?: number;
} = {}): Promise<ReservationInfoResponseType[]> {
  try {
    const params = new URLSearchParams();

    if (userId) params.set("userId", userId);
    if (typeof limit === "number") params.set("limit", String(limit));
    if (typeof skip === "number") params.set("skip", String(skip));

    const query = params.toString() ? `?${params.toString()}` : "";

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservations${query}`
    );
    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || "예약 조회 실패");
    }

    return result.response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("알 수 없는 오류입니다.");
    }
  }
}

export async function patchReservationState({
  _id,
  state,
  selectedDate,
}: {
  _id: string;
  state: ReservationStatus;
  selectedDate?: string;
}) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/reservations`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id, state, selectedDate }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "예약 상태 변경 실패");
    }

    return res.json(); // 변경된 예약 데이터 반환
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("알 수 없는 오류입니다.");
    }
  }
}
