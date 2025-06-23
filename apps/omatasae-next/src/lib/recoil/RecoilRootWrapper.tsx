// RecoilRootWrapper.tsx
"use client";

import { RecoilRoot, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { ResponseUserType } from "@/types/user";
import { userState } from "./atoms/user";

export default function RecoilRootWrapper({
  user,
  children,
}: {
  user: ResponseUserType | null;
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <AuthInitializer user={user} />
      {children}
    </RecoilRoot>
  );
}

function AuthInitializer({ user }: { user: ResponseUserType | null }) {
  const setUser = useSetRecoilState(userState);
  useEffect(() => {
    setUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return null;
}
