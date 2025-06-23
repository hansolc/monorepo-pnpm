import { ResponseUserType } from "@/types/user";
import { atom } from "recoil";

export const userState = atom<ResponseUserType | null>({
  key: "userState",
  default: null, // null은 비로그인 상태
});
