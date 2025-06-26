import "../../globals.css";
import "@monorepo-pnpm/shared/shared.css";
import { Noto_Sans_KR } from "next/font/google";
import clsx from "clsx";
import { lightThemeClasses } from "@/styles/theme/theme.css";
import ReactQueryProvider from "@/lib/tanstack-query/client";
import RecoilRootWrapper from "@/lib/recoil/RecoilRootWrapper";
import { decodeUserJwt } from "@/utils/auth";

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
            className={clsx(lightThemeClasses, noto.className, "bg-background")}
          >
            {children}
          </body>
        </RecoilRootWrapper>
      </ReactQueryProvider>
    </html>
  );
}
