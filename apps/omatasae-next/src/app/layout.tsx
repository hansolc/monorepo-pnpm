import type { Metadata } from "next";
import "../../globals.css";
import "@monorepo-pnpm/shared/shared.css";
import { Noto_Sans_KR } from "next/font/google";
import clsx from "clsx";
import { lightThemeClasses } from "@/styles/theme/theme.css";
import ReactQueryProvider from "@/lib/tanstack-query/client";
import RecoilRootWrapper from "@/lib/recoil/RecoilRootWrapper";
import { decodeUserJwt } from "@/utils/auth";

export const metadata: Metadata = {
  title: "Omatasae",
  description: "일본 음식점 예약 플랫폼",
};

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = decodeUserJwt();
  return (
    <html lang="en">
      <ReactQueryProvider>
        <RecoilRootWrapper user={user}>
          <body
            className={clsx(
              lightThemeClasses,
              noto.className,
              "max-w-[550px] h-full min-w-[360px] mx-auto! bg-background"
            )}
          >
            {children}
          </body>
        </RecoilRootWrapper>
      </ReactQueryProvider>
    </html>
  );
}
