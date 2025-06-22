"use client";

import { UserProps } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ username, password }: UserProps) => {
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

        return "로그인 성공";
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error("알 수 없는 오류입니다.");
        }
      }
    },
    onSuccess: (res) => {
      alert(res);
      router.push("/");
    },
  });
}
