import clsx from "clsx";
import React from "react";

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={clsx("max-w-[500px] h-full min-w-[360px] mx-auto! ")}>
      {children}
    </div>
  );
}
