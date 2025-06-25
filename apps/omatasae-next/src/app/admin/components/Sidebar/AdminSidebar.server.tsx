import React from "react";
import AdminSidebarClient from "./AdminSidebar.client";
import { Typography } from "@monorepo-pnpm/shared/server";

function AdminSidebar() {
  return (
    <aside className="h-full basis-3xs px-6 py-4 shadow-lg">
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
      <AdminSidebarClient />
    </aside>
  );
}

export default AdminSidebar;
