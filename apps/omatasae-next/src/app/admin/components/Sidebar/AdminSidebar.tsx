import React from "react";
import { Typography } from "@monorepo-pnpm/shared/server";
import Link from "next/link";
import { SIDEBAR_LINKS } from "../../constants";
import { sidebarValueAs } from "../../utils";

function AdminSidebar() {
  return (
    <div className="basis-3xs shrink-0 max-xl:hidden">
      <aside className="h-screen w-64 px-6 py-4 shadow-lg fixed top-0 left-0">
        <Typography
          variants="headline"
          size="lg"
          as="h1"
          className="text-primary"
        >
          Omatasae
        </Typography>
        <Typography variants="body" size="lg" className="pt-2" as="p">
          분류
        </Typography>
        <ul className="list-disc marker:text-secondary ml-6">
          {SIDEBAR_LINKS.map((link) => (
            <li key={`omatasae-admin-${link}`}>
              <Link href={`/admin?tabs=${link}`}>{sidebarValueAs(link)}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default AdminSidebar;
