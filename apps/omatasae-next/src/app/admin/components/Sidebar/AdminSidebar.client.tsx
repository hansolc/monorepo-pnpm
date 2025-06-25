"use client";

import { Typography } from "@monorepo-pnpm/shared/server";
import React from "react";

function AdminSidebarClient() {
  return (
    <ul className="list-disc marker:text-secondary ml-6">
      <Typography variants="body" size="md" as="li">
        예약
      </Typography>
    </ul>
  );
}

export default AdminSidebarClient;
