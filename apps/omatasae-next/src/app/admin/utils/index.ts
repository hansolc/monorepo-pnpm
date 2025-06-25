import { SIDEBAR_LINKS } from "../constants";

export function sidebarValueAs(value: (typeof SIDEBAR_LINKS)[number]) {
  switch (value) {
    case "reservation":
      return "예약";
    default:
      return "";
  }
}
