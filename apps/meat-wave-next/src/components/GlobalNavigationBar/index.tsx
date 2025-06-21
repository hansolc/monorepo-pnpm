import { Typography } from "@monorepo-pnpm/shared/server";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

function GlobalNavigationBar() {
  return (
    <nav
      aria-label="Global Navigation"
      className="h-[75px] fixed bg-black/40 w-full flex justify-between px-5 items-center z-50 border-b-onPrimary border-b text-white hover:bg-white hover:text-black"
    >
      <div className="w-[100px]">LOGO</div>
      <ul className="flex gap-20">
        <li>
          <Link href="/about">
            <Typography
              variants="title"
              size="lg"
              className="hover:text-primary"
              emphasize
            >
              회사소개
            </Typography>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/solution">
            <Typography
              variants="title"
              size="lg"
              className="hover:text-primary"
              emphasize
            >
              지속가능경영
            </Typography>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <Typography
              variants="title"
              size="lg"
              className="hover:text-primary"
              emphasize
            >
              뉴스룸
            </Typography>
          </Link>
        </li>
        <li>
          <Link href="/investor">
            <Typography
              variants="title"
              size="lg"
              className="hover:text-primary"
              emphasize
            >
              투자정보
            </Typography>
          </Link>
        </li>
      </ul>
      <GiHamburgerMenu
        size="22"
        className="hover:text-primary cursor-pointer w-[100px]"
      />
    </nav>
  );
}

export default GlobalNavigationBar;
