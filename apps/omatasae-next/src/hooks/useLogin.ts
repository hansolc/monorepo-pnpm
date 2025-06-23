"use client";

import { userState } from "@/lib/recoil/atoms/user";
import { ResponseUserType, UserProps } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import useCreateReservation from "./useCreateReservation";

export default function useLogin() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  const { tryReservationAfterLogin } = useCreateReservation();

  return useMutation({
    mutationFn: async ({
      username,
      password,
    }: UserProps): Promise<ResponseUserType> => {
      try {
        const res = await fetch(`/api/users/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.error || "로그인 실패");
        }

        return result.response;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("알 수 없는 오류입니다.");
        }
      }
    },
    onSuccess: (res) => {
      setUser(res);
      tryReservationAfterLogin();
      router.push("/");
    },
  });
}
