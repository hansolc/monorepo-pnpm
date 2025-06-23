import {
  ReservationInfoRequestType,
  ReservationInfoResponseType,
  ReservationInfoType,
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

export async function getReservation(): Promise<ReservationInfoResponseType[]> {
  try {
    const res = await fetch(`/api/reservations`);
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
