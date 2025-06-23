interface ReservationInfoType {
  link: string;
  peopleCount: string;
  primaryDate: string;
  primaryTime: string;
  secondaryDate?: string;
  secondaryTime?: string;
  tertiaryDate?: string;
  tertiaryTime?: string;
}

interface ReservationInfoRequestType {
  link: string;
  peopleCount: number;
  primaryDate: string;
  secondaryDate?: string;
  tertiaryDate?: string;
}

type ReservationStatus = "WAITING" | "AVAILABLE" | "CONFIRMED" | "REJECTED";

export type {
  ReservationInfoType,
  ReservationInfoRequestType,
  ReservationStatus,
};
