"use client";

import { userState } from "@/lib/recoil/atoms/user";
import { useSetRecoilState } from "recoil";

export default function useLogout() {
  const setUser = useSetRecoilState(userState);

  const logout = async (): Promise<string> => {
    try {
      const res = await fetch(`/api/users/logout`);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error);
      }

      setUser(null);

      return json;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("알 수 없는 오류입니다.");
      }
    }
  };

  return {
    logout,
  };
}
