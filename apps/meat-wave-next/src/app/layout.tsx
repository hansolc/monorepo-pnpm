import type { Metadata } from "next";
import "../../globals.css";
import "@monorepo-pnpm/shared/shared.css";
import { Noto_Sans_KR } from "next/font/google";
import clsx from "clsx";
import { lightThemeClasses } from "@/styles/theme/theme.css";
import Footer from "@/components/Footer";
import GlobalNavigationBar from "@/components/GlobalNavigationBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
  return (
    <html lang="en">
      <body className={clsx(lightThemeClasses, noto.className)}>
        <GlobalNavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
